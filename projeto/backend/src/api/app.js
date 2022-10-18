const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { 
  loginRouter,
 } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;
