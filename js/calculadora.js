let divisas = document.getElementById("divisa").value;
let total = 0;

function convertirDolar () {
    const dolarBlue = 379;

    if (divisas > 0 && divisas < 100000000) {
        total = divisas / dolarBlue;
        alert(`Tus dolares son ${total}`)
    }
    else {
        alert(`No puedo convertir eso`)
    }
}

function convertirPesos () {
    const dolarBlue = 379;

    if (divisas > 0 && divisas < 100000000) {
        total = divisas * dolarBlue;
        alert(`Tus dolares son ${total}`)
    }
    else {
        alert(`No puedo convertir eso`)
    }
}