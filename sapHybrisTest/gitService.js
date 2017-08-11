const express = require('express');
var bodyParser = require('body-parser')
const app = express();
port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/gitRoutes');

routes(app);

app.listen(port);