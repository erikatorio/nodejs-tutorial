const express = require('express');

const router = express.Router();

router.use('/elena', (req, res, next) => {
  console.log('called elena');
  res.send('<h1>DALE BLANQUITA DALE</h1>');
});

module.exports = router;