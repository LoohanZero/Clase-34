// A qué generación pertenece

// Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).


const nacimiento = Number(prompt("¿En qué año naciste?"));

if (nacimiento > 1946 && nacimiento <= 1964 ) {
    alert("Usted es un baby boomer");
} else if (nacimiento > 1964 && nacimiento <= 1979 ) {
    alert("Usted pertenece a la Generación X");
} else if (nacimiento > 1979 && nacimiento <= 2000 ) {
    alert("Usted es un millennial");
} else if (nacimiento > 2000 && nacimiento <= 1990 ) {
    alert("Usted pertenece a la Generación Y");
} else {
    alert("Ni idea de qué generación sos, capo");
};