const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function readByMovieId(req, res, next) {
  const movieId = req.params.movieId;
  const data = await service.readByMovieId(movieId);
  //reviews data joined with the critics data
  //foreign key that connects both of them: critic_id
  //when you get the data, comes back in an array
  //make your own objects (map it over yourself)

  res.json({ data: data });
}

async function reviewExists(req, res, next) {
  const reviewId = req.params.reviewId;
  const foundReview = await service.read(reviewId);
  if (foundReview) {
    res.locals.review = foundReview;
    next();
  } else {
    next({ status: 404, message: `Review ${reviewId} cannot be found` });
  }
}

async function destroy(req, res, next) {
  const reviewId = req.params.reviewId;
  await service.delete(reviewId);
  res.sendStatus(204);
}

async function update(req, res, next) {
  const updatedReview = {
    ...res.locals.review,
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
  await service.update(updatedReview);
  const formattedData = await service.readAndFormat(
    res.locals.review.review_id
  );
  res.json({ data: formattedData });
}

module.exports = {
  readByMovieId,
  delete: [reviewExists, destroy],
  update: [reviewExists, update],
};
