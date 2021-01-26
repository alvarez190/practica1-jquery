var firstElement = $('ul li:first');
var lastElement = $('ul li:last');
var thirdElemet = $('#3');

$(document).ready(function() {
    firstElement.css("background-color", "green");
    lastElement.css("background-color", "blue");
    thirdElemet.css("background-color", "yellow");
});