const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./auth/usersRouter');

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;