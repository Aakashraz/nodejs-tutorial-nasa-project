const express = require('express');
const app = express();

const planetsRouter = require('./routes/planets/planets.router')

// to parse any incoming JSON from the body of incoming requests
app.use(express.json());
// using the planetsRouter custom middleware
app.use(planetsRouter);

module.exports = app;