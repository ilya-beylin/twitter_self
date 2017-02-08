/* Provide middleware */
const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('./tweetBank');

router.get('/users/:name/tweets/:id', function(req, res) {

  var name = req.params.name;
  var id = req.params.id;
  var tweets = tweetBank.find( {'name': name, 'id': id * 1} );
  res.render( 'index_user', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {'name': name} );
  console.log("Name is " + name);
  res.render( 'index_user', { showForm: true, tweets: tweets, name: name } );
  //next();
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.post('/user-tweet', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/users/'.concat(name));
});

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { showForm: true, tweets: tweets } );
  //next();
});

module.exports = router;
