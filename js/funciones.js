'use strict';
var contador = 0,
    adivina;

// Función básica sin parámetros
function hola () {
    return 'hola';
}

// Función básica con parámetros
function multiplica (a, b) {
    return Number(a) * Number(b);
}

// Función con parámetros que imprime en consola la palabra dada (a) o 'error' en su defecto
// la cantidad de veces dicha (b) o 3 por defecto.
function repetir (a, n) {
    let palabra = a || 'error',
        nVeces = n || 3;

    for (let i = 0; i < nVeces; i++) {
        console.info(palabra);
    }

    return true;
}

// Función con parámetros y condicional
function sonIguales (a, b) {
    return (a === b) ? true : false;
}

// función con dependencia de variable global
function aumentarContador () {
    return contador++;
}

// Función que concatena y devuelve los parámetros recibidos con un salto de línea en medio
function dosLineas (a, b) {
    return a + '\n' + b;
}

// Función que devuelve una frase concatenada a la fecha actual
function fecha () {
    let fecha = new Date();

    return 'La fecha de hoy es ' + fecha.toLocaleDateString('ES')
} 

// Función a modo de juego que asigna un valor aleatorio comprendido entre 0 y 9
// en una variable global y lo compara con el número dado como parámetro (x)
// si los números concuerdan devuelve una palabra mágica
function adivinaNumero (x) {
    let pMagic = ('b' + 'a' + + 'a' + 'a');

    adivina = (isNaN(adivina)) ? nAleatorio(10) : adivina;

    return (adivina === x) ? pMagic.toLowerCase() : 'Sigue intentándolo...';
}

// Función que devuelve un número aleatorio de dentro del rango dado (limite)
function nAleatorio (limite) {
    return Math.floor (Math.floor(limite) * Math.random());
}