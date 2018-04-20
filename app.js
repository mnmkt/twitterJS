const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const logger = morgan('dev');


// nunjucks boilerplate:
nunjucks.configure('views', {noCache: true}); // one extra step in nunjucks, to tell it what folder our index.html file lives in
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//app.use = middleware function
app.use(morgan('dev'));

//the typical way to use express middleware;
app.use(express.static(__dirname + '/public'));

//Same as the line above
// app.use(function(req, res, next){
//   const mimeType = mime.lookup(req.path);
//   fs.readFile('./public' + req.path, funciton(err, fileBuffer){
//     if(err) return next();
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer);
//   })
// })

app.use('/', routes);


app.listen(1337, function(){
  console.log('listening on port 1337');
});

