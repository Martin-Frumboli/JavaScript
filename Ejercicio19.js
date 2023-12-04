function Main() {

    var ArrayA = new Array(50);
    var ArrayB = new Array(20);

    //Inicializar el arreglo A con numeros aleatorios

    for (let i = 0; i < ArrayA.length; i++) {
        ArrayA[i] = Math.random();
        
    }

    //Mostrar el ArrayA por consola

    console.log("Array A: ");
    console.log(ArrayA);
    
    //Ordenar el arreglo A de menor a mayor
    ArrayA.sort();

    //Copiar los 10 primeros elementos del array A al array B
   
    for (var i = 0; i < 10; i++) {
      ArrayB[i] = ArrayA[i];
    }
  

    //Rellenar los ultimos 10 elementos del array B con 0.5

    for (let i = 10; i < ArrayB.length; i++) {
        ArrayB[i] = 0.5;
    };

    //Mostrar el arreglo A y B 

    console.log("Arreglo A: ");
    console.log(ArrayA);

    console.log("Arreglo B: ");
    console.log(ArrayB);

};

Main();