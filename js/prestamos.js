
// let cuotas = document.getElementById("cuotas").value;

let bancoPrestamo = []; 

class Bancos {
    constructor (bancos, interes){
        this.bancos = bancos;
        this.interes = interes;
    }
}

let bancosPosibles = [
    {bancos: 'Nacion', interes: 1.30 },
    {bancos: 'Provincia', interes: 1.34},
    {bancos: 'Ciudad', interes: 1.45},
    {bancos: 'Frances', interes: 1.50}
]

function elegirBanco (){
    let monto = document.getElementById("monto").value; 
    let bancos = document.getElementById("bancos").value;
    let interes = document.getElementById("interes").value;
    let cuotas = document.getElementById("cuotas").value;

    

    const bancoElegido = new Bancos (bancos, interes);
    bancoPrestamo.push(bancoElegido);

    let intereses = 0;
    bancoPrestamo.forEach(e => {
        intereses = e.interes
        bancoFinal = e.bancos

        if (monto > 0) {
            let montoFinal = monto * interes;
            let devolver = montoFinal / cuotas
                Swal.fire({
                    icon: 'success',
                    title: 'Préstamo solicitado!',
                    text: 'El prestamo solicitado en ' + bancoFinal + " es de   $" + monto + " y el dinero a devolver es de $" + montoFinal.toFixed(2) + " en " + cuotas + " cuotas" + " de $ " + devolver.toFixed(2),
                    showConfirmButton: true
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'El monto solicitado es inválido',
            })
        }
    });
    }

    function tasaMasAlta () {
        const tasa = bancosPosibles.filter((el) => el.interes > 1.45)
        for (const tasaAlta of tasa){
            Swal.fire({
                icon: 'info',
                title: 'Atención cliente!',
                text: 'La tasa más alta es de ' + tasaAlta.interes,
            })
        }
    }
