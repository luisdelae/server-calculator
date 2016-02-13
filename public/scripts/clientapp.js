/**
 * Created by Luis on 2/13/16.
 */

var firstValue;
var secondValue;
var operatorType;

$(document).ready(function(){
    $('#add').on('click', addValues);
    $('#subtract').on('click', subtractValues);
    $('#multiply').on('click', multiplyValues);
    $('#divide').on('click', divideValues);
    $('#clear').on('click', clearAll);
});

function addValues() {
    event.preventDefault();

    var values = {};
    $.each($('#post-calculator').serializeArray(), function(i, field) {
        values[field.name] = parseFloat(field.value);
    });

    values.type = 'add';

    $('#post-calculator').find('input[type=number]').val('');
    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/add',
        data: values,
        beforeSend: function () {
            //console.log('before sending to server');
        },
        success: function (data) {
            console.log('From Server: ', data);
            appendToDom(data);
        }
    })
}

function subtractValues() {
    event.preventDefault();

    var values = {};
    $.each($('#post-calculator').serializeArray(), function(i, field) {
        values[field.name] = parseFloat(field.value);
    });

    values.type = 'subtract';

    $('#post-calculator').find('input[type=number]').val('');
    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/subtract',
        data: values,
        beforeSend: function () {
            //console.log('before sending to server');
        },
        success: function (data) {
            console.log('From Server: ', data);
            appendToDom(data);
        }
    })
}

function multiplyValues() {
    event.preventDefault();

    var values = {};
    $.each($('#post-calculator').serializeArray(), function(i, field) {
        values[field.name] = parseFloat(field.value);
    });

    values.type = 'multiply';

    $('#post-calculator').find('input[type=number]').val('');
    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/multiply',
        data: values,
        beforeSend: function () {
            //console.log('before sending to server');
        },
        success: function (data) {
            console.log('From Server: ', data);
            appendToDom(data);
        }
    })
}

function divideValues() {
    event.preventDefault();

    var values = {};
    $.each($('#post-calculator').serializeArray(), function(i, field) {
        values[field.name] = parseFloat(field.value);
    });

    values.type = 'divide';

    $('#post-calculator').find('input[type=number]').val('');
    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/divide',
        data: values,
        beforeSend: function () {
            //console.log('before sending to server');
        },
        success: function (data) {
            console.log('From Server: ', data);
            appendToDom(data);
        }
    })
}

function appendToDom(operationData) {
    $('#result').text('Result: ' + operationData);
}

function clearAll() {
    $('#post-calculator').find('input[type=number]').val('');
    $('#result').empty();
}