const nw = require('nw.gui');
const win = nw.Window.get();
const new_win = nw.Window.open;
const menu = new nw.Menu();

$(window).load(() => {

    var boton1 = true;
    var boton2 = true;
    var boton3 = false;
    var boton4 = false;
    actualizar();



    $('#enviar').click(() => {


        $(this).attr('disabled','disabled');
        boton3 = false;

        actualizar();
    });




    function actualizar() {
        if (boton1) {
            $('#boton1').removeAttr('disabled');
        } else {
            $('#boton1').attr('disabled','disabled');
        }
        if (boton2) {
            $('#boton2').removeAttr('disabled');
        } else {
            $('#boton2').attr('disabled','disabled');
        }
        if (boton3) {
            $('#boton3').removeAttr('disabled');
        } else {
            $('#boton3').attr('disabled','disabled');
        }
        if (boton4) {
            $('#boton4').removeAttr('disabled');
        } else {
            $('#boton4').attr('disabled','disabled');
        }
    };




});
