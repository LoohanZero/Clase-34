// Días del mes

// Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const mes = prompt("Ingrese un mes");

const meses29 = "Febrero";
const meses30 = mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre";
const meses31 = mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre";





if (meses31) {
    alert("El mes ingresado tiene 29 días");
} else if (meses30) {
    alert("El mes ingresado tiene 30 días");
} 
else {
    alert("El mes ingresado tiene 31 días");
}
