// Cajero

// Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.

let dineroDisponible = 1000;

let dineroRetirado = Number(prompt (`Usted posee ${dineroDisponible}, ¿Cuánto dinero desea retirar?`));


if (dineroRetirado <= dineroDisponible) {
    dineroDisponible -= dineroRetirado;
}  else {
    alert("No posee esa cantidad de dinero")
}

dineroRetirado = Number(prompt (`Usted posee ${dineroDisponible}, ¿Cuánto dinero desea retirar?`));

if (dineroRetirado <= dineroDisponible) {
    dineroDisponible -= dineroRetirado;
}  else {
    alert("No posee esa cantidad de dinero")
}

dineroRetirado = Number(prompt (`Usted posee ${dineroDisponible}, ¿Cuánto dinero desea retirar?`));

if (dineroRetirado <= dineroDisponible) {
    dineroDisponible -= dineroRetirado;
}  else {
    alert("No posee esa cantidad de dinero")
}
