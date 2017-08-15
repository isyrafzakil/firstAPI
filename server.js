var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "sd2afs",
        "text": "Soy Sauce"
    },
    {
        "id": "jgr23fdj",
        "text": "Salt"
    },
    {
        "id": "flk23gfd",
        "text": "Sugar"
    },
    {
        "id": "dsdd56mkn",
        "text": "Onions"
    }
]

app.get('/', function(req, res) {
    res.send(ingredients);
});

app.get('/isyraf', function(req, res) {
    res.send('Isyraf is the author of this API');
});

app.listen(4200, function() {
    console.log("First API running on port 4200");
});