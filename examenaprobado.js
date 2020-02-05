// Examen aprobado

// Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

const nota = Number(prompt("Ingrese la nota de su examen"));

if (nota >= 7) {
    alert("Su examen ha sido aprobado");
} else if (nota >= 4) {
    alert("Usted tiene que recuperar el examen");
} else {
    alert("Usted está aplazado, nos vemos en marzo");
}