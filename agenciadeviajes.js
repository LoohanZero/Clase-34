// Agencia de viajes

// Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

let precioBali = Number(3000);
let precioMDP = Number(1000);
let precioBrasil = Number(1500);

let viaje = prompt(`Tenemos tres viajes a elegir: 
- Bali: Precio por día, por persona ${precioBali}.
- Mar del plata: Precio por día, por persona ${precioMDP}.
- Brasil: Precio por día, por persona ${precioBrasil}.

¿Cuál desea elegir?`);

let dias = Number(prompt("¿Cuántos días desea alojarse?"));
let personas = Number(prompt("¿Cuántas personas van a viajar?"));



if (viaje === "Bali") {
    precioFinal = precioBali * dias  * personas;    
      
} else if (viaje === "Mar del plata") {
   precioFinal = precioMDP * dias * personas;   
    
} else if (viaje === "Brasil") {
    precioFinal = precioBrasil * dias * personas;   

} else {
    alert("¡Ups! Hubo un error, inténtelo nuevamente.")
};

let confirmacion = confirm(`Usted a elegido el viaje a ${viaje} para ${personas} personas y durante ${dias} días por un total de ${precioFinal}. ¿Desea confirmar esta compra?`);

if (confirmacion === true) {
    alert("Su compra ha sido realizada con éxito");
} else if (confirmacion === false) {
    const cambio = prompt("¿Qué desea cambiar: el destino, las personas o los días?")

    if (cambio === "destino") {
        viaje = prompt(`Tenemos tres viajes a elegir: 
        - Bali: Precio por día, por persona ${precioBali}.
        - Mar del plata: Precio por día, por persona ${precioMDP}.
        - Brasil: Precio por día, por persona ${precioBrasil}.
        
        ¿Cuál desea elegir?`);

    } else if (cambio === "personas" ) {
        dias = Number(prompt("¿Cuántas personas van a viajar?")); 

    } else if (cambio === "días") {
        dias = Number(prompt("¿Cuántos días desea alojarse?"));

    } else {
        alert("¡Ups! Hubo un error, inténtelo nuevamente.")
    };

    if (viaje === "Bali") {
        precioFinal = precioBali * dias * personas;    
          
    } else if (viaje === "Mar del plata") {
        precioFinal = precioMDP * dias * personas;  
        
    } else if (viaje === "Brasil") {
        precioFinal = precioBrasil* dias * personas;  
    
    } else {
        alert("¡Ups! Hubo un error, inténtelo nuevamente.")
    };

    alert(`Usted ha comprado un viaje a ${viaje} por ${precioFinal} para ${personas} personas y durante ${dias} días`);

} else {
    alert("Muchas gracias por su compra");
};
