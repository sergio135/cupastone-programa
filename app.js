'use strict';
var result;

// -------------------------------------------------------------- //
// Las variables para cambiar importantes:
//"agencia" es la que determina a que agencia pertenece
//"url" es la direccion de la api donde envia los datos.
var agencia = 'larochesuryon';
var urlSent = 'http://91.116.142.166:3000/api/';
// -------------------------------------------------------------- //

var boton = [];
boton[0]= { active: true, click: false, value: "pro" };
boton[1]= { active: true, click: false, value: "partculier" };
boton[2]= { active: false, click: false, value: "nouveau" };
boton[3]= { active: false, click: false, value: "cliente habituel" };
boton[4]= { active: false, click: false, value: "" };
boton[5]= { active: false, click: false, value: "" };

$(window).load(function () {
    actualizar();

    $('.btn-select').on('click', function() {
        var check = $(this);
        if (check.attr('id') == 'boton1' || check.attr('id') == 'boton2') {
            boton[2].active = true;
            boton[3].active = true;
            if (check.attr('id') == 'boton1') {
                boton[0].click = true;
                boton[1].click = false;
            } else {
                boton[0].click = false;
                boton[1].click = true;
            }
        } else if (check.attr('id') == 'boton3' || check.attr('id') == 'boton4') {
            if (check.attr('id') == 'boton3') {
                boton[2].click = true;
                boton[4].active = true;
                boton[3].click = false;
                boton[5].active = false;
                boton[5].click = false;
            } else {
                boton[2].click = false;
                boton[4].active = false;
                boton[3].click = true;
                boton[5].active = true;
                boton[4].click = false;
            }
        }
        actualizar()
    })

    $('.select-box').on('change', function() {
        var check = $(this);
        if (check.attr('id') == 'boton5') {
            boton[4].click = true;
            boton[4].value = check.val();
        } else {
            boton[5].click = true;
            boton[5].value = check.val();
        }
        actualizar()
    })

    $('#enviar').on('click', function() {
        if (boton[4].click || boton[5].click) {
            var temp = [];
            for (var i of boton) {
                if (i.click == true) {
                temp = temp.concat(i.value);
                }
            }
            result = { agencia: agencia, opcion1: temp[0], opcion2:  temp[1], lista: temp[2] };
            $.ajax({
                method: "POST",
                url: urlSent,
                data: result
            })
            .done(function( msg ) {
                location.reload();
            })
            .fail(function() {
                alert("erreur, impossible de se connecter à la base de données");
            });
        } else {
            alert("vous n’avez pas sélectionné tous les champs");
        }
    })

});

function actualizar() {
    var n = 1
    for (var i of boton) {
        if (i.active) {
            $('#boton' + n).removeAttr('disabled');
        } else {
            $('#boton' + n).attr('disabled', 'disabled');
        };
        if (i.click) {
            $('#boton' + n).addClass('boton-box-click');
        } else {
            $('#boton' + n).removeClass('boton-box-click');
        };
        n++;
    }
    if (boton[4].active) {
        $('#boton' + 5).removeAttr('style');
    } else {
        $('#boton' + 5).attr('style', 'visibility: hidden');
    }
    if (boton[5].active) {
        $('#boton' + 6).removeAttr('style');
    } else {
        $('#boton' + 6).attr('style', 'visibility: hidden');
    }
}
