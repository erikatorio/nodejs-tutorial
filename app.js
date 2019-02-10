const http = require('http');
const express = require('express');

const app = express();

const routesElena = require('./routes/elena');
const routesOdaat = require('./routes/odaat');

app.use(routesElena);

app.use(routesOdaat);

const server = http.createServer(app);

app.listen(3000);