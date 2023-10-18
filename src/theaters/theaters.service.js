const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

//For a given movie id, returns the list of theaters where that movie is showing from the db.
function readByMovieId(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select(
      "t.theater_id",
      "t.name",
      "t.address_line_1",
      "t.address_line_2",
      "t.city",
      "t.state",
      "t.zip",
      "t.created_at",
      "t.updated_at",
      "mt.is_showing",
      "mt.movie_id"
    )
    .where("mt.movie_id", movieId);
}

//Reduced properties function used to create a nested movies object inside the theaters object.
const reducedMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  movie_created_at: ["movies", null, "created_at"],
  movie_updated_at: ["movies", null, "updated_at"],
  is_showing: ["movies", null, "is_showing"],
  movie_theater_id: ["movies", null, "theater_id"],
});

//Returns a list of all theaters where each theater object has an array of movies that is showing in that theater from the db.
function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "m.movie_id", "mt.movie_id")
    .select(
      "*",
      "m.created_at as movie_created_at",
      "m.updated_at as movie_updated_at",
      "t.theater_id as movie_theater_id"
    )
    .then(reducedMovies);
}

module.exports = {
  readByMovieId,
  list,
};
