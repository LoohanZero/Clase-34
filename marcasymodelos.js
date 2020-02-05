// Marcas y modelos

// Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

const marca = prompt("Qué marca de zapatillas desea: Nike, Adidas o Puma?");


if (marca === "Nike") {
    let modelo = prompt("¿Qué modelo desea: jogging o footing?");

    alert(`Usted ha elegido el modelo ${modelo} de zapatilla marca ${marca}`);
} else if (marca === "Adidas") {
    modelo = prompt("¿Qué modelo desea: urbano o runner?");
    
    alert(`Usted ha elegido el modelo ${modelo} de zapatilla marca ${marca}`);
} else if (marca === "Puma") {
    modelo = prompt("¿Qué modelo desea: joven o experto?");
    
    alert(`Usted ha elegido el modelo ${modelo} de zapatilla marca ${marca}`);
} else {
    alert("Elija una opción correcta");
};
