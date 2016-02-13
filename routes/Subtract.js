/**
 * Created by Luis on 2/13/16.
 */

var express = require('express');
var router = express.Router();
var path = require('path');
var val1;
var val2;
var difference;

router.get('/', function(req, res) {
    res.send(req.body);
});

router.post('/', function(req, res) {
    val1 = parseFloat(req.body.firstValue);
    val2 = parseFloat(req.body.secondValue);
    difference = (val1 - val2).toString();
    res.send(difference);
});



module.exports = router;