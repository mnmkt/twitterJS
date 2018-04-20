const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const logger = morgan('dev');


// nunjucks boilerplate:
nunjucks.configure('views', {noCache: true}); // one extra step in nunjucks, to tell it what folder our index.html file lives in
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//app.use = middleware function
app.use(morgan('dev'));
app.use('/', routes);


app.listen(1337, function(){
  console.log('listening on port 1337');
})

