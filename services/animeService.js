import animeRepository from "../repository/animeRepository.js";

export const findAll = async () => {
  try {
    const posts = await animeRepository.findAll();
    return {
      data: posts,
    };
  } catch (error) {
    throw error;
  }
};
