module.exports = (error, req, res, next) => {
  if (res.statusCode !== 200) {
    res.status(res.statusCode);
  } else {
    res.status(500);
  }

  res.json({ error: error.message });
};
