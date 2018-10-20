const router = require('express').Router();
const api_dir = require('./api/battles-ops');

router.use('/api', api_dir);

module.exports = router;