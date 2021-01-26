$(document).ready(function() {
    var container = $('select');

    $('#boton1').click(function(e) {
        if (container.val() != 'vacio') {
            // Busco el nodo ingresado
            var option = container.find('option[value=' + container.val() + ']');

            // Lo elimino del contenedor
            option.remove();

            // Creo un nuevo nodo cuando se elimina uno
            let optionVoid = $('<option value="vacio" selected>Vacio</option>');

            // Añado el nuevo nodo
            container.append(optionVoid);

        }
    });
});