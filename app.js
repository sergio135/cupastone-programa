/* Generated by Babel */
'use strict';

var nw = require('nw.gui');
var win = nw.Window.get();
var new_win = nw.Window.open;
var menu = new nw.Menu();

$(window).load(function () {

    var boton1 = true;
    var boton2 = true;
    var boton3 = false;
    var boton4 = false;
    actualizar();

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