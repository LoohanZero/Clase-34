// Recetas

// Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5). Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.



const tieneHuevo = confirm("Si tenés huevo, apretá confirmar");
const tieneManteca = confirm("Si tenés manteca, apretá confirmar");
const tienePapa = confirm("Si tenés papa, apretá confirmar");
const tieneQueso = confirm("Si tenés queso, apretá confirmar");
const tieneCarne = confirm("Si tenés carne, apretá confirmar");

// 2 Ingredientes
const omelette = tieneHuevo && tieneQueso;
const pastelDePapa = tienePapa && tieneCarne;

// 3 Ingredientes
const tortillaDePapa = tieneHuevo && tienePapa && tieneQueso;
const carneconPure = tienePapa && tieneCarne  && tieneManteca;

// 4 Ingredientes

const carneConPureyHuevo = tienePapa && tieneCarne  && tieneManteca && tieneHuevo;
const carneConPureyQUeso = tienePapa && tieneCarne  && tieneManteca && tieneQueso;

// 5 Ingredientes
const superRejunte = tienePapa && tieneCarne  && tieneManteca && tieneQueso && tieneHuevo;

const puedeRecetas = omelette || pastelDePapa || tortillaDePapa || carneconPure || carneConPureyHuevo || carneConPureyQUeso || superRejunte;


let receta = "";


if (superRejunte) {
    receta += "- super rejunte\n";
} 
if (carneConPureyHuevo) {
    receta += "- carne con puré y huevo\n";
}
if (carneConPureyQUeso) {
    receta += "- carne con puré y queso\n";

}
if (tortillaDePapa) {
    receta += "- tortilla de papa\n";

}
if (carneconPure) {
    receta += "- carne con puré\n";

}
if (omelette) {
    receta += "- omelette\n";

}
if (pastelDePapa) {
    receta += "- pastel de papa\n";

} 
if (puedeRecetas) {
    alert(`Podés preparar las siguientes recetas: 
    ${receta}`);
} else {
    alert("Pida un delivery");
}