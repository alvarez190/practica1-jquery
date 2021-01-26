var firstElementThirdList = $('ul:last').find('li').eq(2);
var lastElementFirstList = $('ul:first li:last');
var thirdElementSecondList = $('ul:odd').find('li').eq(1);

$(document).ready(function() {
    firstElementThirdList.css("background-color", "red");
    lastElementFirstList.css("background-color", "blue");
    thirdElementSecondList.css("background-color", "yellow");
});