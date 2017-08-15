var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('My first API!');
});

app.get('/isyraf', function(req, res) {
    res.send('Isyraf is the author of this API');
});

app.listen(4200, function() {
    console.log("First API running on port 4200");
});