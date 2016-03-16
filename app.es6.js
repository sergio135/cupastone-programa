$(window).load(() => {

    let boton1 = true;
    let boton2 = true;
    let boton3 = false;
    let boton4 = false;
    actualizar();

    $('.btn-select').on('click',() => {

        click();

    })


    $('#enviar').click(() => {

        $(this).attr('disabled','disabled');
        boton3 = false;

        actualizar();
    });




    function click () {
        alert('as');
        $(this).attr('disabled','disabled');
    }



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
