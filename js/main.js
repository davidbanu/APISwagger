$(document).ready(function() {
$('#calc-salary').on("click", function(){
    init();
});

function init() {
var salariu  = $("#salariu").val();
console.warn(salariu);
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
    $('#ecran-init').html('<p>Salariul brut este: ' + salariuBrut + '</p><br>' +
    '<p CAS ul este de: ' + cas + '</p><br>' +
    '<p> CASS ul este de: ' + cass + '</p><br>' +
    '<p> IV ul este de: ' + iv + '</p><br>' +
    '<p>Salariul net este de: ' + salariuNet + '</p>');

}

});
