const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const logger = morgan('dev');


// nunjucks boilerplate:
nunjucks.configure('views', {noCache: true}); // one extra step in nunjucks, to tell it what folder our index.html file lives in
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

//app.use takes middleware function
// app.use(function(req, res, next){

// });

app.get('/', function(req, res){
  res.send('you got the root route')
});


app.get('/news', function(req, res, next){
  res.jason({ name: 'newsRoute', date:12345 });
});

// app.use(function(req, res, next){

// })

// app.listen(1337, function(){
//   response.send('here is some html')
// })

