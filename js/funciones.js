'use strict';
var contador = 0;

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

