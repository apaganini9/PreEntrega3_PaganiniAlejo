 
let prestamo = 0;

let prestamoFinal = 0;

let bancoPrestamo = [];

// constructor
//-------------
class Bancos {
    constructor (banco, interes){
        this.banco = banco;
        this.interes = interes;
    }
}

let bancosPosibles = [
    {banco: 'nacion', interes: '1.30' },
    {banco: 'provincia', interes: '1.34'},
    {banco: 'ciudad', interes: '1.45'},
    {banco: 'frances', interes: '1.50'}
]

// seleccion banco
//---------------------
function elegirBanco (){
    prestamo = prompt('Elija la cantidad de dinero a pedir')
    let banco = prompt('Seleccione el banco (nacion, provincia, ciudad, frances)');
    let interes = parseFloat(prompt('Elija la tasa de interes (1.30, 1.34, 1.45, 1.50,'));
    const bancoElegido = new Bancos (banco, interes);
    bancoPrestamo.push(bancoElegido);

    //busqueda
    //----------
    let intereses = 0;
    bancoPrestamo.forEach(elemento => {
        intereses = elemento.interes
        bancoFinal = elemento.banco

        
        prestamoFinal = prestamo * intereses;

        alert(`El prestamo solicitado en ${bancoFinal} es de ${prestamo} y el dinero a devolver es de ${prestamoFinal}`)
    });
    }

    function tasaMasAlta () {
        
        const tasa = bancosPosibles.filter((el) => el.interes > 1.45)
        for (const tasaAlta of tasa){
            alert (`La tasa mas alta es de ${tasaAlta.interes}`)
        }
    }



// programa main
//---------------
// bienvenida();
// let opcion = prompt("Ingrese una opcion: \n 1: calcular prestamo \n 2: convertir pesos a dolares \n 3: convertir dolares a pesos \n 4: mostrame la tasa mas alta \n 5: salir");
// while (opcion !== "5") {
//     if (opcion === "1") {
//         elegirBanco();
//     }
//     else if (opcion === "2") {
//         conversorPeso();
//     }
//     else if (opcion === "3") {
//         conversorDolar();
//     }
//     else if (opcion === "4") {
//         tasaMasAlta();
//     }
//     opcion = prompt("Ingrese una opcion: \n 1: calcular prestamo \n 2: convertir pesos a dolares \n 3: convertir dolares a pesos \n 4: mostrame la tasa mas alta \n 5: salir");
// }
// alert("Gracias por utilizar nuestra plataforma!")

