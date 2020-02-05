// Recetas

// Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5). Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.



const ingrediente1 = confirm("Si tenés arroz, apretá confirmar");
const ingrediente2 = confirm("Si tenés cebolla, apretá confirmar");
const ingrediente3 = confirm("Si tenés pollo, apretá confirmar");
const ingrediente4 = confirm("Si tenés morrón, apretá confirmar");
const ingrediente5 = confirm("Si tenés jengibre, apretá confirmar");

if (ingrediente1 === true && ingrediente2 === true ) {
        let receta = confirm("Podés hacer arroz con cebolla caramelizada, ¿elegís esta receta?")

        if(receta === true) {
            alert(Buenísimo, adiós)
        } else {
            alert("Podés hacer arroz con aros de cebolla");
        };









} else if (ingrediente1 === true || ingrediente2 === true) {
    alert("No tengo recetas para vos");
}
