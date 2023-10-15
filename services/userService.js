import userRepository from "../repository/userRepository.js";
import { encryptPassword } from "../libs/bcrypt.js";

export const create = async (reqBody) => {
  const { email, password } = reqBody;
  try {
    const encryptedPassword = await encryptPassword(password);
    console.log(encryptedPassword);
    const user = await userRepository.create({
      email: email.toLowerCase(),
      encryptedPassword,
    });
    return {
      id: user.id,
      email: user.email,
      token: user.token,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  } catch (err) {
    throw err;
  }
};

export const findOne = async (query) => {
  try {
    const user = await userRepository.findOne(query);
    return {
      id: user.id,
      email: user.email,
      token: user.token,
      encryptedPassword: user.encryptedPassword,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  } catch (err) {
    return null;
  }
};

export const findByPk = async (primaryKey) => {
  try {
    const user = await userRepository.findByPk(primaryKey);
    console.log(user);
    return {
      id: user.id,
      email: user.email,
    };
  } catch (err) {
    return null;
  }
};

export const findAll = async () => {
  try {
    const getUsers = await userRepository.findAll();
    const users = getUsers.map((el) => {
      return { id: el.id, email: el.email };
    });
    return {
      users,
    };
  } catch (err) {
    throw err;
  }
};
