module.exports.city = (req, res, next) => {
  if (!req.body.city) {
    res.status(400);
    next(new Error('city is epmty'));
    return;
  }
  next();
};
