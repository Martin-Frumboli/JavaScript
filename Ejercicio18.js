var valores = [true,5,false,"Hola","Adios",2];

//Determinar cual de los dos elementos de texto es mayor

var texto1 = [3];
var texto2 = [4];

if(texto1.length > texto2.length){
    console.log(texto1 + "Es mayor que " + texto2);

} else if(texto2.length > texto1.length){
    console.log(texto2 + "Es mayor que" + texto1);
} else{

    console.log("Los dos elementos tienen la misma longitud")

}

//Utilizando exclusivamente los dos valores booleanos del array, determinar los 
//operadores necesarios para obtener un resultado true y otro resultado false

var booleano1 = [0];
var booleano2 = [2];

var resultadoTrue = booleano1 || booleano2 ;
var resultadoFalse = booleano1 && booleano2;

console.log("Operadores para obtener resultado true: " + resultadoTrue);
console.log("Operadores para obtener resultado false: " + resultadoFalse);

//Determinar el resultado de las 5 operaciones matematicas basicas con los dos numeros del array

var numero1 = [1];
var numero2 = [5];

var resta = numero1 - numero2;
var suma = numero1 + numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

console.log("Resta: " + resta);
console.log("Suma: " + suma);
console.log("Multiplicacion: " + multiplicacion );
console.log("Division: " + division);
console.log("Modulo: " + modulo);