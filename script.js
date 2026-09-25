const password = document.getElementById("password");

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const especiales = "!@#$%^&*()_-+=<>?/{}[]|";

document.getElementById("generar").onclick = () => {

    let caracteres = "";

    if(document.getElementById("mayusculas").checked)
        caracteres += mayusculas;

    if(document.getElementById("minusculas").checked)
        caracteres += minusculas;

    if(document.getElementById("numeros").checked)
        caracteres += numeros;

    if(document.getElementById("especiales").checked)
        caracteres += especiales;

    if(caracteres.length===0){
        alert("Selecciona al menos una opción.");
        return;
    }

    let longitud = parseInt(document.getElementById("longitud").value);

    let resultado="";

    for(let i=0;i<longitud;i++){

        resultado += caracteres.charAt(
            Math.floor(Math.random()*caracteres.length)
        );

    }

    password.value = resultado;

};

document.getElementById("copiar").onclick = ()=>{

    if(password.value==="") return;

    navigator.clipboard.writeText(password.value);

    alert("Contraseña copiada.");

};