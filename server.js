const app = require('./app');
const http = require('http');


let port = process.env.port || 3000;
http.createServer(app).listen(port);
