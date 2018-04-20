'use strict';
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
  const allTheTweets = tweetBank.list();
  res.render('index', { title: 'Twitter.js', tweets: allTheTweets });
});

router.get('/users/:name', function(req, res, next){
  const tweetsForName = tweetBank.find({ name: req.params.name });
  res.render('index', { title: 'Twitter.js', tweets: tweetsForName });
});

router.get('/tweets/:id', function(req, res, next){
  const tweetsWithThatId = tweetBank.find({ id: +req.params.id });
  res.render('index', { title: 'Twitter.js', tweets: tweetsWithThatId});

});

// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public'});
// });

module.exports = router;

