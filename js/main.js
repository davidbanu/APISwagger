$(document).ready(function () {
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
            // '<div class="row">' +
            // '<div class="col-md-12 text-center"><h5>Este scutit de impozit?</h5><input type="checkbox" class="scutit-impozit" checked data-toggle="toggle">' +
            // '</div>' +
            '<button class="btn" id="calc-salary">Calculeaza</button>' +
            '</div>');
        $('#calc-salary').on("click", function () {
            inputSalariu();
        });
    }

    function inputSalariu() {
        var salariu = $("#salariu").val();

        // var isChecked = $('.scutit-impozit').is(':checked');


        if (salariu.trim() === '' || salariu.trim() < 1900) {
            $('#err-salariu').removeClass('hide').addClass('show');
            $('#err-salariu').text('Eroare: Adaugati o valoare valida!')
        }
        else if (salariu.trim() >= 1900) {
            // var scutitImpozit = $('.scutit-impozit').on("click", function(){
            //     return $('.scutitImpozit[name=scutit]:checked').val();
            // });
            // console.warn(scutitImpozit);
            $('#ecran-init').html('');
            calculSalariu(salariu);
        }
    }

    function calculSalariu(salariuBrut) {
        var cas = (salariuBrut / 100) * 25;
        var cass = (salariuBrut / 100) * 10;
        // if (scutitImpozit === 'da'){
        //    var iv = 0; 
        // }
        // else {
            var iv = ((salariuBrut - cas - cass) / 100) * 10;
        // }
        var salariuNet = salariuBrut - cas - cass - iv;
        afisareSalariu(salariuBrut, cas, cass, iv, salariuNet);
    }

    function afisareSalariu(salariuBrut, cas, cass, iv, salariuNet) {

        $('#ecran-init').html(
            '<p class="alert alert-info"><b>Salariul brut</b> ' + salariuBrut + '</p><br>' +
            '<p> Asigurari Sociale (CAS)' + cas + '</p><br>' +
            '<p> Asigurari Sociale de Sanatate (CASS) ' + cass + '</p><br>' +
            '<p> Impozit pe venit (IV) ' + iv + '</p><br>' +
            '<p class="alert alert-success"><b>Salariul net</b> ' + salariuNet + '</p>');

        $('.header').append('<button class="pull-left btn" id="inapoi-button"> Inapoi </button>');

        $('#inapoi-button').on("click", function () {
            $('.container-calculator').html('');
            afisareEcranInitial();
            $('#inapoi-button').remove();
        });
    }
});
