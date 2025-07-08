const express = require("express");
const { LOGIN, REGISTER, MOVIES } = require("../constants/path");
const {
  getAllMoviesController,
  getMovieController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
  getMovieByIdController,
  getMovieByGenreController,
} = require("../controllers/moviesController");

const router = express.Router();

router.get("/", (req, res, next) => {
 getAllMoviesController(req,res,next);
});

router.get("/:movieId",  (req, res, next) => {
  getMovieByIdController(req,res,next);
 });

router.post("/", createMovieController);

router.patch("/:movieId", updateMovieController);

router.delete("/:movieId", deleteMovieController);

module.exports = router;
