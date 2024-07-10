const express = require('express');

// creating a new router object. It is a function, not a property.
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;