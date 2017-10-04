var express = require('express');
var router = express.Router();
const utils = require('./utils');

router.get('/test', utils.test);

module.exports = router;