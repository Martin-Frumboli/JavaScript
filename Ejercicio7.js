let limite;
let suma = 0;
function comenzarSuma() {

    limite = parseInt(document.getElementById("limite").value);
    //Obtiene el valor ingresado por el usuario en un elemento HTML con el ID "limite" 
    //y lo convierte en un número entero utilizando la función parseInt(). 
    //Luego, asigna ese valor a la variable limite.
    document.getElementById("limite").disabled = true;
    //Desactiva el elemento HTML con el ID "limite" para que el usuario no pueda editarlo.

}


function agregarNumero() {

    if (limite === undefined) {

        alert("por favor ingrese el valor limite primero");
        return;
    }
    //Verifica si la variable limite es undefined, 
    //lo cual significa que el usuario no ha ingresado un valor límite todavía. 
    //Si es así, muestra una alerta pidiendo al usuario que ingrese un valor límite válido
    // y luego sale de la función utilizando return.

    let numero = parseInt(document.getElementById("numero").value);
    //Obtiene el valor ingresado por el usuario en un elemento HTML con el ID "numero"
    // y lo convierte en un número entero utilizando la función parseInt().
    // Luego, asigna ese valor a la variable numero.


    if (isNaN(numero)) {
        alert("Ingrese un numero valido");
        return;
    }
    //Verifica si el valor ingresado en numero no es un número válido. 
    //Si es así, muestra una alerta pidiendo al usuario que ingrese un número válido
    // y luego sale de la función utilizando return.

    suma += numero;

    //Agrega el valor de numero a la variable suma, acumulando la suma de los números ingresados.

    document.getElementById("sumaActual").textContent = suma;

    //Actualiza el contenido del elemento HTML con el ID "sumaActual" con el valor actual de la suma.

    if (suma > limite) {

        document.getElementById("mensaje").textContent = "Se ha superado el limite";

        document.getElementById("numero").disabled = true;
    }
   //Verifica si la suma actual supera el límite establecido por el usuario.
   // Si es así, muestra un mensaje en el elemento HTML con el ID "mensaje" 
   //indicando que se ha superado el límite y desactiva el elemento HTML con el ID "numero" 
   //para que el usuario no pueda ingresar más números.
   

    document.getElementById("numero").value = "";

    //Borra el contenido del elemento HTML con el ID "numero", para que el usuario pueda ingresar un nuevo número.
}