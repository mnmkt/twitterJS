const express = require('express');
const app = express();


app.use(function (req, res, next) {

})


app.get('/', (req, res) => res.send('Hello world!'))

// app.get('/news', (req, res) => res.send('This is news'))

app.listen(3000, ()=> console.log('server listening'))
