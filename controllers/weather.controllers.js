module.exports = {
  getSubmissions,
  addSubmissions,
};

// Массив для хранения результатов сабмитов
const submissions = [];

function getSubmissions(req, res) {
  res.status(200).json(submissions);
}

function addSubmissions(req, res) {
  submissions.push(...req.body.city);
  res.status(201).json([...req.body.city]);
}
