const express = require('express');
const debug = require('debug');
const chalk = require('chalk');
const path = require('path');
var exphbs  = require('express-handlebars');

const indexRouter = require('./routes/index');
const PORT = 3007;

let app = express();

// config
// =================================================
app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
// =================================================
// app.get("/", (req, res) => {
//   // res.end('hi');
// });
app.use('/', indexRouter);


// listen
// =================================================
app.listen(PORT, function() {
  // debug('listening on port ' + PORT);
  console.log('listening on port ' + chalk.cyanBright(PORT));
  
});