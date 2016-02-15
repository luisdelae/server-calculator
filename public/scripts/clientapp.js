/**
 * Created by Luis on 2/14/16.
 */

var valuesArray = [];

$(document).ready(function(){
    $('#clear').on('click', clearAll);
    $('#equals').on('click', doTheMath);
    $('button').not('#equals, #clear').on('click', clickButton);
});

function clickButton() {
    event.preventDefault();
    $('#operation').val($('#operation').val() + $(this).text());
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

    $.ajax({
        type: 'POST',
        url: chooseURL(values.operationType),
        data: values,
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
    event.preventDefault();
    $('#post-calculator').find('input[type=text]').val('');
    $('#result').empty();
}
