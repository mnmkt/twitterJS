'use strict';
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
  const tweets = tweetBank.list();
  res.render('index', { title: 'Twitter.js', tweets: tweets });
});


module.exports = router;

