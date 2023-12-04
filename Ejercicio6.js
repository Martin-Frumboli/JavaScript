 /*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */
 
function varificarParImpar(){

    const numero = parseInt(document.getElementById("numeroImput").value);

    if(isNaN(numero)){
        document.getElementById("resultado").textContent = "Por favor, ingresa un numero";
    }else if(numero == 0){
        document.getElementById("resultado").textContent = "El numero no es par ni impar";
    }else if(numero % 2==0){
        document.getElementById("resultado").textContent = "El numero es par.";
    }else {
        document.getElementById("resultado").textContent = "El numero es impar";
    }

}


   