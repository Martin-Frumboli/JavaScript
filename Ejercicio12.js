//Funcion para devolver el tipo de dato

const devolverTipoDato = () => {
    const datoInput = document.getElementById("datoIngresado");
    const dato = datoInput.value;
    
    let resultado;
    
    // Intentar convertir a número entero
    const numeroEntero = parseInt(dato);
    if (!isNaN(numeroEntero)) {
      resultado = "number (entero)";
    }
    
    // Intentar convertir a número decimal
    const numeroDecimal = parseFloat(dato);
    if (!isNaN(numeroDecimal) && numeroDecimal.toString() === dato) {
      resultado = "number (decimal)";
    }
    
    // Intentar convertir a booleano
    if (dato.toLowerCase() === "true" || dato.toLowerCase() === "false") {
      const booleano = JSON.parse(dato.toLowerCase());
      resultado = "boolean";
    }
    
    // Verificar si es null
    if (dato.toLowerCase() === "null") {
      resultado = "null";
    }
    
    // Si no se pudo convertir a ningún tipo de dato específico, se considera una cadena de texto
    if (!resultado) {
      resultado = "string";
    }
    
    document.getElementById("resultado").textContent = resultado;
  };