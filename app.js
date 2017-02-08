const express = require('express');
const logger = require('morgan');
const fs = require('fs');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const routes = require('./routes.js');


const app = express(); // creates an instance of the express application
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

/* Set up body parser */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/* Listen on port 3000 */

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

/* Create logger */

var accessLogStream = fs.createWriteStream('/Users/ilyabeylin/Fullstack/twitter-js/access.log', {flags:'a'});
app.use(logger('combined', {stream:accessLogStream}));

/* Set up routes */

app.use('/', routes);
app.use('/public', express.static('./public'));
