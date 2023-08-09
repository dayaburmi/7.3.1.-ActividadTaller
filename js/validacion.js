function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let button = document.getElementById('regBtn');

function validarContrasena(){
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    return password1.length >= 6 && password1 == password2;
}

function validarCampos(){
    let name = document.getElementById('nombre').value;
    let lastName = document.getElementById('apellido').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let email = document.getElementById('email').value;
    return name !== "" && lastName !== "" && email !== "" && password1 !== "" && password2 !== "";
}

function validarCheckBox(){
    let terminos = document.getElementById('terminos');
    return terminos.checked;
}

function checkall(){
    if(validarContrasena() && validarCampos() && validarCheckBox()){
        showAlertSuccess();
    }
    else{
        showAlertError()
        
    }
}

button.addEventListener('click', () => {
    checkall();
});
