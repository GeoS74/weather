const { formidable } = require('formidable');

module.exports = (req, res, next) => {
  formidable({}).parse(req, (err, fields) => {
    if (err) {
      next(err);
      return;
    }
    req.body = fields;
    next();
  });
};
