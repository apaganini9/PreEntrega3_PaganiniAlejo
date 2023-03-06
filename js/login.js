function login(){
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (user == "apaganini" && password == "coderhouse"){
            window.location = "../html/inicio.html";
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Los datos son incorrectos! Vuelve a ingresar',
        })
    }
}

function guardarUser (){
    let usuarios = 
        {usuario: "apaganini",
        contraseña: "coderhouse"
    }

    localStorage.setItem("usuario", JSON.stringify(usuarios.usuario))
    localStorage.setItem("password", JSON.stringify(usuarios.contraseña))
}