/*Se utiliza una funcion flecha, esta funcion sera ejecutada cuando sea llamada */

const cambiarFrase = () => {

    const palabraInput = document.getElementById("palabraInput");

    const palabra = palabraInput.value;

    let fraseConEspacios = "";

    for (let i = 0; i < palabra.length; i++) {
        fraseConEspacios += palabra[i] + " " ;
    }

    document.getElementById("resultado").textContent = fraseConEspacios;

};