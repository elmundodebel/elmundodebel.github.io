
var getData = function(){
    var datosUsuario = {
        nombre : document.getElementById("inputName").value,
        apellido : document.getElementById("inputLastName").value,
        email : document.getElementById("inputEmail").value,
        telefono : document.getElementById("inputTel").value,
        clave : document.getElementById("inputPassword").value,

    }
    sessionStorage.setItem('Registro', JSON.stringify(datosUsuario));
    console.log(datosUsuario);
    
}

var usuario = JSON.parse(sessionStorage.getItem('Registro'));

