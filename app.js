const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('여기는 /add-product');
  res.send(
    '<form action="/product" method="POST">\
  <input type = "text" name = "title">\
    <button type="submit">Add Product</button>\
  </input >\
    </form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log('여기는 /product');
  console.log(req.body); // undefined
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('여기는 /');
  res.send('<h1>HELLO from EXPRESS</h1>');
});

app.listen(3000, console.log(`http://localhost:3000/`));
