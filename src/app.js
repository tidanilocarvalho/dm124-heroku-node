const express = require('express');
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');
app.use(session({secret: 'no one will know', resave: false, saveUninitialized: false}));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Questions Routes
const questionsRouter = require('./routes/questions');
app.use('/api/questions', questionsRouter);

// Answers Routes
const answersRouter = require('./routes/answers');
app.use('/api/answers', answersRouter);

// Users Routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// Missing routes
app.use(notFound);

module.exports = app;