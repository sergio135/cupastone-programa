'use strict';
$(window).load(function () {

    var boton1 = true;
    var boton2 = true;
    var boton3 = false;
    var boton4 = false;
    actualizar();


    $('.btn-select').on('click', function() {
        var check = $(this);

        check.addClass('boton-box-active');

        if (check.attr('id') == 'boton1' || check.attr('id') == 'boton2') {
            boton3 = true;
            boton4 = true;
        }
        actualizar();
    })





    $('#enviar').click(function () {

        $(undefined).attr('disabled', 'disabled');
        boton3 = false;

        actualizar();
    });







    function actualizar() {
        if (boton1) {
            $('#boton1').removeAttr('disabled');
        } else {
            $('#boton1').attr('disabled', 'disabled');
        }
        if (boton2) {
            $('#boton2').removeAttr('disabled');
        } else {
            $('#boton2').attr('disabled', 'disabled');
        }
        if (boton3) {
            $('#boton3').removeAttr('disabled');
        } else {
            $('#boton3').attr('disabled', 'disabled');
        }
        if (boton4) {
            $('#boton4').removeAttr('disabled');
        } else {
            $('#boton4').attr('disabled', 'disabled');
        }
    };



});
