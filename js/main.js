$(document).ready(function() {
afisareEcranInitial();

function afisareEcranInitial() {
    $('.container-calculator').append(
'<div class="text-center" id="ecran-init">' +
                    ' <div class="row">' +  
                            '<div class="col-md-8">' +
                                '<form>' + 
                                        '<input type="number" name="salariu" id="salariu">' +
                                        '<p class="hide text-center alert alert-danger" id="err-salariu"></p>' +
                                '</form>' +
                            '</div>' +
                            '<div class="col-md-4"></div>' +
                        '</div>' +
                        '<div class="row">' + 
                            '<div class="col-md-12 text-center"><h5>Are functie de baza?</h5></div>' +
                        '</div>' + 
                        '<div class="row">' +
                            '<div class="col-md-12 text-center"><h5>Este scutit de impozit?</h5></div>' +
                        '</div>' + 
                        '<button class="btn" id="calc-salary">Calculeaza</button>' +  
            '</div>');
            $('#calc-salary').on("click", function(){
                inputSalariu();
            });
}

function inputSalariu() {
var salariu  = $("#salariu").val();

if (salariu.trim() === '' || salariu.trim() < 1900) {
     $('#err-salariu').removeClass('hide').addClass('show');
     $('#err-salariu').text('Eroare: Adaugati o valoare valida!')
}
else if (salariu.trim() >= 1900) {
    $('#ecran-init').html('');
    calculSalariu(salariu);
}
}

function calculSalariu(salariuBrut) {
var cas = ( salariuBrut/100 ) * 25;
var cass = (salariuBrut/100) * 10;
var iv = ((salariuBrut- cas -cass)/100) * 10;
var salariuNet = salariuBrut - cas - cass - iv;
afisareSalariu(salariuBrut, cas, cass, iv, salariuNet);
}

function afisareSalariu (salariuBrut, cas, cass, iv, salariuNet) {

    $('#ecran-init').html(
    '<p>Salariul brut este: ' + salariuBrut + '</p><br>' +
    '<p> CAS ul este de: ' + cas + '</p><br>' +
    '<p> CASS ul este de: ' + cass + '</p><br>' +
    '<p> IV ul este de: ' + iv + '</p><br>' +
    '<p>Salariul net este de: ' + salariuNet + '</p>');

    $('.header').append('<button class="pull-left btn" id="inapoi-button"> Inapoi </button>');

    $('#inapoi-button').on("click", function() {
        console.warn('Trece');
        $('.container-calculator').html('');
        afisareEcranInitial();
        $('#inapoi-button').remove();
       
        
    });

}
});
