const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//For a given movie id, returns the list of theaters where that movie is showing.
//CASE: `GET /movies/:movieId/theaters`
async function readByMovieId(req, res, next) {
  const movieId = req.params.movieId;
  const data = await service.readByMovieId(movieId);
  res.json({ data: data });
}

//Returns a list of all theaters where each theater object has an array of movies that is showing in that theater.
async function list(req, res, next) {
  const data = await service.list();
  res.json({ data: data });
}

module.exports = {
  readByMovieId: asyncErrorBoundary(readByMovieId),
  list: asyncErrorBoundary(list),
};
