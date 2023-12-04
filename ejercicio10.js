/*Se utiliza una funcion flecha, esta funcion sera ejecutada cuando sea llamada */

const invertirPalabra = () => {

    /*Dentro de la función invertirPalabra, se utiliza el método getElementById() 
    del objeto document para obtener la referencia al elemento HTML con el id "palabra".
     Este elemento es un campo de entrada (<input>) donde el usuario puede ingresar una palabra. */
    const palabraInput = document.getElementById("palabra");

    /* Se obtiene el valor del campo de entrada 
    utilizando la propiedad value del elemento obtenido en el paso anterior 
    y se asigna a la variable palabra. */
    const palabra = palabraInput.value;

    /*Se utiliza el método split('') para convertir la cadena de caracteres palabra en un arreglo de letras.
     El argumento '' se utiliza como separador, 
     lo que significa que cada carácter en la cadena se separará y se convertirá en un elemento del arreglo. */

     /* Se encadenan los métodos reverse() y join('') al arreglo resultante del paso anterior.
      El método reverse() invierte el orden de los elementos en el arreglo y el método join('') 
      une los elementos del arreglo en una cadena utilizando una cadena vacía como separador. */
    const palabraInvertida = palabra.split('').reverse().join('');

    /* Se utiliza el método getElementById()
     nuevamente para obtener la referencia al elemento HTML con el id "resultado",
     donde se mostrará el resultado de la inversión de la palabra. */

     /*Se actualiza el contenido del elemento obtenido en el paso anterior 
     utilizando la propiedad textContent para mostrar la palabra invertida (palabraInvertida). */

    document.getElementById("resultado").textContent = palabraInvertida;
};