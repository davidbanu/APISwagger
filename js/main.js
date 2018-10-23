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
            '<div class="row">' +
            '<div class="col-md-12 text-center"><h5>Este scutit de impozit?</h5><input type="radio" class="scutit-impozit" name="scutit" value="da"> Da<br><input type="radio" class="scutit-impozit" name="scutit" value="nu"> Nu<br></div>' +
            '</div>' +
            '<button class="btn" id="calc-salary">Calculeaza</button>' +
            '</div>');
        $('#calc-salary').on("click", function () {
            inputSalariu();
        });
    }

    function inputSalariu() {
        var salariu = $("#salariu").val();

        var isChecked = $('.scutit-impozit').is(':checked');

        console.warn(isChecked)

        if (salariu.trim() === '' || salariu.trim() < 1900) {
            $('#err-salariu').removeClass('hide').addClass('show');
            $('#err-salariu').text('Eroare: Adaugati o valoare valida!')
        }
        else if (salariu.trim() >= 1900 && isChecked) {
            var scutitImpozit = $('.scutit-impozit').on("click", function(){
                return $('.scutitImpozit[name=scutit]:checked').val();
            });
            console.warn(scutitImpozit);
            $('#ecran-init').html('');
            calculSalariu(salariu, scutitImpozit);
        }
    }

    function calculSalariu(salariuBrut, scutitImpozit) {
        var cas = (salariuBrut / 100) * 25;
        var cass = (salariuBrut / 100) * 10;
        if (scutitImpozit === 'da'){
           var iv = 0; 
        }
        else {
            var iv = ((salariuBrut - cas - cass) / 100) * 10;
        }
        var salariuNet = salariuBrut - cas - cass - iv;
        afisareSalariu(salariuBrut, cas, cass, iv, salariuNet);
    }

    function afisareSalariu(salariuBrut, cas, cass, iv, salariuNet) {

        $('#ecran-init').html(
            '<p>Salariul brut este: ' + salariuBrut + '</p><br>' +
            '<p> CAS ul este de: ' + cas + '</p><br>' +
            '<p> CASS ul este de: ' + cass + '</p><br>' +
            '<p> IV ul este de: ' + iv + '</p><br>' +
            '<p>Salariul net este de: ' + salariuNet + '</p>');

        $('.header').append('<button class="pull-left btn" id="inapoi-button"> Inapoi </button>');

        $('#inapoi-button').on("click", function () {
            $('.container-calculator').html('');
            afisareEcranInitial();
            $('#inapoi-button').remove();
        });
    }
});
