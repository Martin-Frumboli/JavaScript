// Función para calcular el área de un círculo
const calcularArea = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area.toFixed(2);// toFixed(2) redondea el resultado a 2 decimales
};

// Función para calcular el perímetro de un círculo
const calcularPerimetro = (radio) => {
    const perimetro = 2 * Math.PI * radio;
    return perimetro.toFixed(2);
};

// Función para calcular el área y el perímetro del círculo
const calcularAreaPerimetro = () => {
    const radioInput = document.getElementById("radio");
    const radio = parseFloat(radioInput.value);

    const area = calcularArea(radio);
    const perimetro = calcularPerimetro(radio);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p><strong>Área:</strong> ${area}</p><p><strong>Perímetro:</strong> ${perimetro}</p>`;
};