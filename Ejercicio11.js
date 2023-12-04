// Función para encontrar la palabra más larga
const encontrarPalabraMasLarga = () => {
    const fraseInput = document.getElementById("frase");
    const frase = fraseInput.value;

    const palabras = frase.split(" ");
    let palabraMasLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    document.getElementById("resultado").innerHTML = '<span class="resultado">' + palabraMasLarga + '</span>';
};