let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
            
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; 
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }
    else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del numero secreto'); //Asigno texto a h1
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); //Asigno texto a p    
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Reiniciar intentos, Indicar mensaje de intervalo de números, Generar nuevo numero aleatorio
    condicionesIniciales();
    //Deshabilitar boton de reinicio


}

condicionesIniciales();
