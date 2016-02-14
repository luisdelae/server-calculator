/**
 * Created by Luis on 2/14/16.
 */

var valuesArray = [];

$(document).ready(function(){
    $('#add').on('click', appendAddition);
    $('#subtract').on('click', appendSubtraction);
    $('#multiply').on('click', appendMultiplication);
    $('#divide').on('click', appendDivision);
    $('#clear').on('click', clearAll);
    $('#equals').on('click', doTheMath);
    $('#num1').on('click', appendOne);
    $('#num2').on('click', appendTwo);
    $('#num3').on('click', appendThree);
    $('#num4').on('click', appendFour);
    $('#num5').on('click', appendFive);
    $('#num6').on('click', appendSix);
    $('#num7').on('click', appendSeven);
    $('#num8').on('click', appendEight);
    $('#num9').on('click', appendNine);
    $('#num0').on('click', appendZero);
});

function appendOne() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 1);
}
function appendTwo() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 2);
}
function appendThree() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 3);
}
function appendFour() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 4);
}
function appendFive() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 5);
}
function appendSix() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 6);
}
function appendSeven() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 7);
}
function appendEight() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 8);
}
function appendNine() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 9);
}
function appendZero() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + 0);
}
function appendAddition() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + " + ");
}
function appendSubtraction() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + " - ");
}function appendMultiplication() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + " x ");
}function appendDivision() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + " / ");
}

function doTheMath() {
    event.preventDefault();

    var values = {};
    $.each($('#post-calculator').serializeArray(), function(i, field) {
        values[field.name] = (field.value);
        valuesArray = values[field.name].split(" ");
        values.firstValue = valuesArray[0];
        values.operationType = valuesArray[1];
        values.secondValue = valuesArray[2];
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: chooseURL(values.operationType),
        data: values,
        beforeSend: function () {
            //console.log('before sending to server');
        },
        success: function (data) {
            console.log('From Server: ', data);
            showResultInTextBox(data);
        }
    })
}

function chooseURL(operType) {
    var operTypeURL;
    if (operType == "+") {
        operTypeURL = '/add';
    } else if (operType == "-") {
        operTypeURL = '/subtract';
    } else if (operType == "x") {
        operTypeURL = '/multiply';
    } else if (operType == "/") {
        operTypeURL = '/divide';
    }
    return operTypeURL;
}

function showResultInTextBox(operationData) {
    $('#operation').val(operationData);
}

function clearAll() {
    $('#post-calculator').find('input[type=number]').val('');
    $('#result').empty();
}
