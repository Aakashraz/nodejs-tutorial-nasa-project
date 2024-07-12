const PORT = process.env.PORT || 8000;
// process.env.PORT:
//
// process.env is an object in Node.js that contains the user environment.
// PORT is an environment variable that might be set by the system or deployment platform.
// || 8000:
//If process.env.PORT is undefined or falsy, it will use 8000 as the port number.

// importing 'app' from app.js
const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

const http = require('http');
// In essence, by passing app to http.createServer(), you're connecting Express's powerful routing and middleware system to Node's basic HTTP server.
// This allows you to use Express's features while still having direct access to the underlying HTTP server if needed.
const server = http.createServer(app);

// need to call this function before listening to the port, to get updated Planets data.
async function startServer() {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}...`);
    })
}

startServer();
