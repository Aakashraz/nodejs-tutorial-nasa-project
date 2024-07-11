const express = require('express');
const {
    getAllPlanets,
} = require('./planets.controller');

// creating a new router object. It is a function, not a property.
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;