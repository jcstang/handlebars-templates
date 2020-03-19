const express = require('express');
const router = express.Router();

// home page
// =================================================
router.get('/', (req, res, next) => {
  res.render('index', { title: 'My handlebars app - hello world'});
});

module.exports = router;