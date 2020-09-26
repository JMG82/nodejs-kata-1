const express = require('express');
const bodyParser = require('body-parser');

const BooksRouter = require('./routers/books.router');
const MagazinesRouter = require('./routers/magazines.router');
const AuthorsRouter = require('./routers/authors.router');

const app = () => {

  const appExpress = express();

  appExpress.use(bodyParser.json({limit: '5mb'}));

  appExpress.use(BooksRouter());
  appExpress.use(MagazinesRouter());
  appExpress.use(AuthorsRouter());

  appExpress.listen(8080, () => {
    console.log('Server listening on 8080');
  })

}

module.exports = app
