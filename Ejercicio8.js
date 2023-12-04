//Se declara una variable llamada numeros y se le asigna un arreglo vacío.
// Esta variable se utilizará para almacenar los números ingresados por el usuario.
let numeros = [];

/* Se define una función llamada agregarNumero(). 
Esta función se ejecutará cuando se llame desde algún evento, 
como por ejemplo cuando se presione un botón. 
Su propósito es agregar un número ingresado por el usuario al arreglo numeros. */
function agregarNumero() {
    /*Dentro de la función agregarNumero(), se utiliza el método getElementById() 
    del objeto document para obtener la referencia al elemento HTML con el id "numero". 
    Este elemento se espera que sea un campo de entrada (<input>) donde el usuario puede ingresar un número. */
    const numeroInput = document.getElementById("numero");

    /* Se utiliza la función parseInt()
     para convertir el valor del campo de entrada en un número entero.
     El resultado se asigna a la variable numero. */
    const numero = parseInt(numeroInput.value);

    /* Se verifica si el número ingresado (numero) es diferente de cero.
     Si es diferente de cero, significa que se ingresó un número válido 
     y se procede a agregarlo al arreglo numeros utilizando el método push().
      Además, se borra el contenido del campo de entrada estableciendo
       su valor en una cadena vacía (numeroInput.value = ""). */
    if (numero !== 0) {
        numeros.push(numero);
        numeroInput.value = "";
    }
}
  /* Se define otra función llamada calcular(), 
  que también se espera que sea llamada desde algún evento,
   como por ejemplo cuando se presione otro botón. 
   Esta función realiza los cálculos sobre los números ingresados en el arreglo numeros 
   y muestra el resultado en el documento HTML. */
function calcular() {

    /* Dentro de la función calcular(), se verifica si el arreglo numeros está vacío 
    (es decir, si no se ingresaron números). Si está vacío, 
    se actualiza el contenido del elemento HTML con el id "resultado" para mostrar el mensaje 
    "No se ingresaron números." y se finaliza la ejecución de la función utilizando la palabra clave return. */
    if (numeros.length === 0) {
        document.getElementById("resultado").textContent = "No se ingresaron números.";
        return;
    }

    /*Si el arreglo numeros no está vacío, se utilizan varias funciones 
    y métodos para realizar los siguientes cálculos: */

    /* Se utiliza la función Math.max() junto con el operador de propagación (...) 
    para obtener el valor máximo dentro del arreglo numeros. El resultado se asigna a la variable maximo. */
    const maximo = Math.max(...numeros);

    /* Se utiliza la función Math.min() junto con el operador de propagación
     para obtener el valor mínimo dentro del arreglo numeros. El resultado se asigna a la variable minimo */
    const minimo = Math.min(...numeros);

    /* El método reduce() se llama en el arreglo numeros y 
    se utiliza para iterar sobre cada elemento del arreglo y acumular un resultado final.*/

    /* La función de reducción (a, b) => a + b se pasa como argumento a reduce().
     Esta función toma dos parámetros (a y b) y devuelve la suma de esos dos valores.*/

     /*El primer parámetro a representa el acumulador, 
     que almacena el resultado parcial de la suma mientras se itera sobre los elementos del arreglo. */

     /* El segundo parámetro b representa cada elemento del arreglo numeros a medida que se itera. */

     /*En cada iteración, la función de reducción suma el valor actual de a con el valor de b. */

     /*El segundo argumento de reduce(), 0, se utiliza como valor inicial del acumulador (a). 
     Esto significa que la primera vez que se ejecute la función de reducción, el valor de a será 0. */

     /* Al finalizar la iteración sobre todos los elementos del arreglo numeros, 
     reduce() devuelve el valor final del acumulador, que es la suma total de todos los elementos. */

     /* Este valor se asigna a la variable suma utilizando la palabra clave const,
      lo que significa que suma es una constante y su valor no se puede reasignar. */
    const suma = numeros.reduce((a, b) => a + b, 0);

    /*Se calcula el promedio dividiendo la suma (suma) 
    entre la longitud del arreglo numeros. El resultado se asigna a la variable promedio. */
    const promedio = suma / numeros.length;

    /*Finalmente, se actualiza el contenido del elemento HTML con el id "resultado"
     para mostrar los resultados de los cálculos realizados.
      Se concatena una cadena que contiene los valores máximo, mínimo y promedio, 
      y se utiliza el método toFixed() para limitar el número de decimales del promedio a 2. */
    document.getElementById("resultado").textContent = "Máximo: " + maximo + ", Mínimo: " + minimo + ", Promedio: " + promedio.toFixed(2);
}