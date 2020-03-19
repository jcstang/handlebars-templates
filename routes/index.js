const express = require('express');
const router = express.Router();

// home page
// =================================================
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'My handlebars app - hello world'});
  res.render('index', { title: 'Pug app!!'});
});

module.exports = router;