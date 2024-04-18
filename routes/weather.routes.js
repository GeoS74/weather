const express = require('express');

const router = express.Router();
const weather = require('../controllers/weather.controllers');
const bodyParser = require('../libs/bodyParser');
const validator = require('../validators/weather.validator');

router.get('/', weather.getSubmissions);
router.post('/', bodyParser, validator.city, weather.addSubmissions);

module.exports = router;
