// Cambio de contraseña

// Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.


const respuesta1 = "Marcelo";
const respuesta2 = "Gomez";
const respuesta3 = "Jacinta Pichimahuida";


alert("Si desea cambiar la contraseña responda las tres preguntas de seguridad.");
const pregunta1 = prompt("¿Cuál fue el nombre de su primera mascota?");

if (pregunta1 === respuesta1) {
    const pregunta2 = prompt("Si desea cambiar la contraseña responda las tres preguntas de seguridad. ¿Cuál es el apellido de su madre?"); 

    if (pregunta2 === respuesta2 ) {
        const pregunta3 = prompt("Si desea cambiar la contraseña responda las tres preguntas de seguridad. ¿Cuál es el nombre de su maestra de primer grado?");

        if (pregunta3 === respuesta3) {
            const nuevaContra = prompt("Ingrese su nueva contraseña");

            alert("Su contraseña fue modificada con éxito");
        } else {
            alert("Verifique su respuesta ya que es incorrecta, inténtelo nuevamente");
        }
    }  else {
        alert("Verifique su respuesta ya que es incorrecta, inténtelo nuevamente");
    }
}  else {
    alert("Verifique su respuesta ya que es incorrecta, inténtelo nuevamente");
}
 

