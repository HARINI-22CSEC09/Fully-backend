
const { Movies } = require("../models/stepddbschema");
const getAllMovies = async () => {
  try {
    const movies = await Movies.find();
    return movies;
  } catch (e) {
    throw e;
  }
};

const getMovieById = async (movieId) => {
  try {
    const movies = await Movies.findOne({id});
    return movies;
  } catch (e) {
    throw e;
  }
};

const getMovieByGenre = async (genre) => {
  // logic to get movie by id
  console.log("getMovieByGenre");
};

const createMovie = async (movie) => {
  // logic to get movie by id
  console.log("createMovie");
};

const updateMovie = async (movieId, data) => {
  // logic to get movie by id
  console.log("updateMovie");
};

const deleteMovie = async (movieId) => {
  // logic to get movie by id
  console.log("deleteMovie");
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
