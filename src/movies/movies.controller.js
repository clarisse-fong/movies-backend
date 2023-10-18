const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//For a given movieId, returns the theaters where that movie is showing.
//Case: GET /movies/:movieId/theaters`
async function list(req, res, next) {
  const hasQuery = req.query.is_showing;
  let data;
  if (hasQuery) {
    data = await service.moviesShowing();
  } else {
    data = await service.list();
  }
  res.json({ data: data });
}

//Checks if a movie exists. If the movie exists, save it to res.locals.movie. Else, send a 404 error.
async function movieExists(req, res, next) {
  const movieId = req.params.movieId;
  const data = await service.read(movieId);
  if (data) {
    res.locals.movie = data;
    next();
  } else {
    next({ status: 404, message: `Id ${movieId} does not exist` });
  }
}

//Returns the movie object for a given movieId
//Case: GET /movies/:movieId
function read(req, res, next) {
  const movie = res.locals.movie;
  res.json({ data: movie });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
};
