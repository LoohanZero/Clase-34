// Grupo de letras

// Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
// grupo A = {a, e, i, o ,u}
// grupo B = {b, c, d, f, g}
// grupo C = {h, j, k , l, m}
// grupo D = {n, o, p, q, r} = grupo E = {s, t, u, v, w, x, y, z}


const letra = prompt("Ingrese una letra")
const grupoA = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";
const grupoB = letra === "b" || letra === "b" || letra === "d" || letra === "f" || letra === "g";
const grupoC = letra === "h" || letra === "j" || letra === "k" || letra === "l" || letra === "m";
const grupoD = letra === "n" || letra === "p" || letra === "q" || letra === "r";
const grupoE = letra === "s" || letra === "t" || letra === "v" || letra === "w" || letra === "x" || letra === "y" || letra === "z";

if (grupoA === true) {
    alert("La letra pertenece al grupo A");
} else if (grupoB === true) {
    alert("La letra pertenece al grupo B");
} else if (grupoC === true) {
    alert("La letra pertenece al grupo C");
} else if (grupoD === true) {
    alert("La letra pertenece al grupo D");
} else if (grupoE === true) {
    alert("La letra pertenece al grupo E");
} else {
    alert("Ingrese una letra, por favor");
};