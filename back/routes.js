const fs = require('fs');

import drawCrawl from './drawCrawl.js';
import drawPages from './drawPages.js';
// import drawPages from './drawPages.js';

const router = require('express').Router();

router.get('/', (req, res) => {
  drawCrawl().then((data) => {
    res.send(data.body);
  });
});

router.get('/:id', (req, res) => {
  drawPages(req.params.id).then((data) => {
    res.send(data.body);
  });
});

module.exports = router;
