const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const hasQuery = req.query.is_showing;
  let data;
  if (hasQuery) {
    console.log("has query");
    data = await service.moviesShowing();
  } else {
    data = await service.list();
  }
  res.json({ data: data });
}

module.exports = {
  list,
};
