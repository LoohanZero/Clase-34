// Heladería II

// Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
// 1/4kg: 2 sabores.
// 1/2kg: 3 sabores.
// 3/4kg: 4 sabores.
// 1kg: 5 sabores.

// Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un mensaje con la cantidad de kg y los gustos escogidos.

let kilos = prompt("¿Cuántos kilos de helado desea comprar. Opciones: 1/4, 1/2, 3/4 o 1kg?");

// const sabores = kilos * 2;

if (kilos === "1/4") {
    alert("Usted puede elegir dos sabores");

    let sabores = prompt("Ingrese el primer sabor desea elegir");
    sabores += " y " + prompt("Ingrese el segundo sabor a elegir");

    alert(`Usted a comprado ${kilos} kilos de ${sabores}.`);


} else if (kilos === "1/2") {
    alert("Usted puede elegir tres sabores");

    let sabores = prompt("Ingrese el primer sabor desea elegir");
    sabores += ", " + prompt("Ingrese el segundo sabor a elegir");
    sabores += " y " + prompt("Ingrese el tercer sabor a elegir");

    alert(`Usted a comprado ${kilos} kilos de ${sabores}.`);

} else if (kilos === "3/4") {
    alert("Usted puede elegir cuatro sabores");

    let sabores = prompt("Ingrese el primer sabor desea elegir");
    sabores += ", " + prompt("Ingrese el segundo sabor a elegir");
    sabores += ", " + prompt("Ingrese el tercer sabor a elegir");
    sabores += " y " + prompt("Ingrese el cuarto sabor a elegir");

    alert(`Usted a comprado ${kilos} kilos de ${sabores}.`);
} else if (kilos === "1") {
    alert("Usted puede elegir cinco sabores");

    let sabores = prompt("Ingrese el primer sabor desea elegir");
    sabores += ", " + prompt("Ingrese el segundo sabor a elegir");
    sabores += ", " + prompt("Ingrese el tercer sabor a elegir");
    sabores += ", " + prompt("Ingrese el cuarto sabor a elegir");
    sabores += " y " + prompt("Ingrese el quinto sabor a elegir");

    alert(`Usted a comprado ${kilos} kilos de ${sabores}.`);
} else {
    alert("Atenete a la pregunta");
}