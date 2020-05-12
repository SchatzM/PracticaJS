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