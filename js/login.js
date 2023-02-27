function login(){
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (user == "apaganini" && password == "coderhouse"){
        window.location = "inicio.html";
    }
    else {
        alert ("Tus datos son incorrectos, intente devuelta!");
    }
}