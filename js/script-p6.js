//var div2 = $('.div').children().length; alternativa
var div2 = $('.div>*').length;
var div3 = $('div:last');

$(document).ready(function() {
    $('#button1').click(function(e) {
        let $parrafo = $('<p> En el contenedor \'div2\' hay ' + div2 + ' elementos </p>');
        div3.find('span').after($parrafo);
    });
});