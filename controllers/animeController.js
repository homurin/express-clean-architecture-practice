import * as animeService from "../services/animeService.js";
import ApiError from "../utils/apiError.js";

export const findAll = async (req, res) => {
  try {
    const animes = await animeService.findAll();
    res.status(200).json({
      status: "OK",
      data: animes,
    });
  } catch (error) {
    new ApiError("Internal server error", 500);
  }
};
