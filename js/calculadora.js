function convertirDolar () {
    const dolarBlue = 371;
    let divisas = parseInt(document.getElementById("divisa").value);
    let total = 0;  

    if (divisas > 0 && divisas < 100000000) {
        total = divisas / dolarBlue;
        Swal.fire({
            icon: 'success',
            title: 'Conversión exitosa!',
            text: 'Tus dolares son ' + "$" + total.toFixed(2),
            showConfirmButton: true
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'No puedo hacer esa conversión!',
            showConfirmButton: false,
            timer: 2000
        })
    }
}

function convertirPesos () {
    const dolarBlue = 371;
    let divisas = document.getElementById("divisa").value;
    let total = 0;

    if (divisas > 0 && divisas < 100000000) {
        total = divisas * dolarBlue;
        
        Swal.fire({
            icon: 'success',
            title: 'Conversión exitosa!',
            text: 'Tus pesos son ' + "$" + total,
            showConfirmButton: true
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'No puedo hacer esa conversión!',
            showConfirmButton: false,
            timer: 2000
        })
    }
}