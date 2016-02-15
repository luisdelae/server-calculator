var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var add = require('./routes/Add');
var subtract = require('./routes/Subtract');
var multiply = require('./routes/multiply');
var divide = require('./routes/divide');

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 5000);

app.use('/add', add);

app.use('/subtract', subtract);

app.use('/multiply', multiply);

app.use('/divide', divide);


app.get('/*', function(req, res) { // /* turns everything after the first whack in a an url into a string.
    //request and response
    console.log('here is the request: ', req.params);
    var file = req.params[0] || '/views/index.html'; //this has the path to the index.html, which has to be relative to the ./public, which should be generic
    res.sendFile(path.join(__dirname, './public', file)); //joins paths together to get a whole path of where the file is, relative to where we are
});

app.listen(app.get('port'), function() { //this is what starts running node with the port we've given it
    console.log('Server is ready on port ' + app.get('port'));
});