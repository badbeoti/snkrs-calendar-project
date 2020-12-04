import drawCrawl from './drawCrawl.js';

const router = require('express').Router();

router.get('/', (req, res) => {
  drawCrawl().then((data) => {
    res.send(data.body);
  });
});

module.exports = router;
