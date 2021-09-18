const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;
const MONGODB_URI = "mongodb+srv://dm124:fK79Lnzw0gzQfJyC@dm124.cntxt.mongodb.net/dm124db?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI)
  .then(() => {
    http.createServer(app)
      .listen(port, () => {
        console.log(`Server up on http://${host}:${port}`);
      })
  })
  .catch();
