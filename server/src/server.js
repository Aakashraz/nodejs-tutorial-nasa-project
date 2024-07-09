const PORT = process.env.PORT || 8000;
// process.env.PORT:
//
// process.env is an object in Node.js that contains the user environment.
// PORT is an environment variable that might be set by the system or deployment platform.
// || 8000:
//If process.env.PORT is undefined or falsy, it will use 8000 as the port number.


console.log(PORT);