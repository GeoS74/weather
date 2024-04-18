module.exports = (req, res, next) => {
  res.status(404);
  next(new Error('not found'));
};
