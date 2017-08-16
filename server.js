var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

// Fetch data
app.get('/ingredients', function (req, res) {
    res.send(ingredients);
});

app.get('/isyraf', function (req, res) {
    res.send('Isyraf is the author of this API');
});

// Add data
app.post('/ingredients', function (req, res) {
    var ingredient = req.body;
    if (!ingredient || ingredient.text === "") {
        res.status(500).send({ error: "Your ingredient must have text" });
    }
    else {
        ingredients.push(ingredient);
        res.status(200).send(ingredient);
    }
});

// Update data
app.put('/ingredients/:ingredientId', function (req, res) {

    var ingredientId = req.params.ingredientId;
    var newText = req.body.text;

    if (!newText || newText == "") {
        res.status(500).send({ error: "You must provide ingredient text" });
    } else {
        var objectFound = false;
        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i];
            if (ingredient.id === req.params.ingredientId) {
                ingredients[i].text = newText;
                objectFound = true;
                break;
            }
        }

        if (!objectFound) {
            res.status(500).send({ error: "Ingredient ID not found!!!" });
        } else {
            res.send(ingredients);
        }
    }


})

app.listen(4200, function () {
    console.log("First API running on port 4200");
});