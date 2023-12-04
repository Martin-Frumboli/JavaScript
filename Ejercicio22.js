//Obtener referencias a los botones

let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

//Agregar elemento de click al boton

boton1.addEventListener("click", function() {

    let mensaje = "Buenas Espero que estes bien";

    document.getElementById("p1").textContent = mensaje;


});

boton2.addEventListener("click", function() {

    let mensaje2 = "Metele ganas rey vas por todo!";

    document.getElementById("p2").textContent = mensaje2;

    
});

