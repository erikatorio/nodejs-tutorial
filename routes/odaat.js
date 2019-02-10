const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  console.log('called odaat');
  res.send('<h1>One day at a time</h1>');
});

module.exports = router;