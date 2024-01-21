
let numeromaximo = 10;
let listaNumerosSorteados = [];
let numerosecreto = GenerarNumeroSecreto();
let intentos = 1;




function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function VerificarIntento(){
let numerodeusuario = parseInt(document.getElementById("numeroUsuario").value);



if(numerodeusuario === numerosecreto){
AsignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
document.getElementById("reiniciar").removeAttribute("disabled");

}else{
    if(numerodeusuario > numerosecreto){
        AsignarTextoElemento("p","El numero secreto es menor");
    }else{
        AsignarTextoElemento("p","El numero secreto es mayor");
    }
    intentos++;
    LimpiarCaja();
    console.log("intentos ", intentos);

}
return;
}


function LimpiarCaja(){
    let valorcaja = document.querySelector("#numeroUsuario");
    valorcaja.value = "";
}


AsignarTextoElemento("h1","Juego matematico");
AsignarTextoElemento("p",`Escoge un numero del 1 al ${numeromaximo}`);

console.log(numerosecreto);

function ReiniciarJuego(){
    LimpiarCaja();
    Reiniciar();

}

function Reiniciar(){
    AsignarTextoElemento("h1","Juego matematico");
    AsignarTextoElemento("p",`Escoge un numero del 1 al ${numeromaximo}`);
    numerosecreto = GenerarNumeroSecreto();
    intentos="1";
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}


function GenerarNumeroSecreto(){
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1; 

    console.log(numerogenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeromaximo){
        AsignarTextoElemento("p",`Ya se sortearon todos los numeros posibles`);
        document.querySelector("#reiniciar").setAttribute("disabled","true");
    }else{
        if (listaNumerosSorteados.includes(numerogenerado)){
            return GenerarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numerogenerado);
            return numerogenerado;
        }
    }

    

}