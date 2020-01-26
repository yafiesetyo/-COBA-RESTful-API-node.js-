var express = require('express'),
    app = express(),
    port = process.env.port || 3000, 
    bodyParser = require("body-parser"),
    controller = require('./controller');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var route = require('./routes');
route(app);

app.listen(port);
console.log('duarr memek');
