// const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

// const server = http.createServer();

// server.listen(port, () => console.log(`Server start this port: ${port}!`));
app.listen(port, () => console.log(`Server listen this port: ${port}!`));
