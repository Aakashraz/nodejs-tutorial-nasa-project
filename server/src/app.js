const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')

const planetsRouter = require('./routes/planets/planets.router')

// to allow CORS access to port:3000
app.use(cors({
    origin: 'http://localhost:3000',
}));

// to parse any incoming JSON from the body of incoming requests
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// using the planetsRouter custom middleware
app.use(planetsRouter);

module.exports = app;