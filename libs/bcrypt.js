import bcrypt from "bcrypt";

const salt = 10;

export async function encryptPassword(password) {
  try {
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
  } catch (err) {
    return err;
  }
}

export async function checkPassword(password, encryptedPassword) {
  try {
    const isPasswordCorrect = await bcrypt.compare(password, encryptedPassword);
    return isPasswordCorrect;
  } catch (err) {
    console.log(err);
    return false;
  }
}
