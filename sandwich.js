// Sandwich

// Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
// Tipo de pan: blanco, negro, integral
// Ingrediente 1: tomate, lechuga, pimiento
// Ingrediente 2: cebolla, aceituna, pepino
// Aderezos: mostaza, mayonesa, picante
// Gaseosa: Coca Cola, Pepsi, Sprite

const pan = prompt("¿Qué tipo de pan desea para su sandwich: blanco, negro o integral?");
let sandwich = "";

if (pan === "blanco" || pan === "negro" || pan === "integral") {
    sandwich = "con pan " + pan;

} else {
    alert("Ingrese una opción válida");
}

const ingrediente1 = prompt("¿Qué tipo de ingredientes desea para su sandwich: tomate, lechuga o pimiento?");

if (ingrediente1 === "tomate" || ingrediente1 === "lechuga" || ingrediente1 === "pimiento") {
    sandwich += ", relleno de " + ingrediente1;

} else {
    alert("Ingrese una opción válida");
}

const ingrediente2 = prompt("¿Qué tipo de ingredientes desea para su sandwich: cebolla, aceituna o pepino?");

if (ingrediente2 === "cebolla" || ingrediente2 === "aceituna" || ingrediente2 === "pepino") {
    sandwich += "y " + ingrediente2;

} else {
    alert("Ingrese una opción válida");
}

const adherezos = prompt("¿Qué tipo de adherezo desea para su sandwich: mostaza, mayonesa o picante?");

if (adherezos === "mostaza" || adherezos === "mayonesa" || adherezos === "picante") {
    sandwich += " con adherezo de " + adherezos;

} else {
    alert("Ingrese una opción válida");
}

const bebida = prompt("¿Qué tipo de bebida desea para acompañar su sandwich: Coca Cola, Pepsi o Sprite?");

if (bebida === "Coca Cola" || bebida === "Pepsi" || bebida === "Sprite") {
    sandwich += " y acompañado de " + bebida + " para beber.";

} else {
    alert("Ingrese una opción válida");
}

alert(`Usted ha comprado un sandwich de ${sandwich}`);