const express = require('express');
http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');


// Express
const app = express();
const server = http.createServer(app);


// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Require routes
const helloRouter = require('./routes/helloRoute');


// Use routes
app.use(helloRouter);


server.listen(3000)

