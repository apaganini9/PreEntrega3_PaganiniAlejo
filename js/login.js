const boton = document.getElementById("btnLogin").addEventListener("click", login);

function login(){
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (user == "apaganini" && password == "coderhouse"){
            window.location = "../html/inicio.html";
            guardarUser();
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Los datos son incorrectos! Vuelve a ingresar',
        })
    }
}
