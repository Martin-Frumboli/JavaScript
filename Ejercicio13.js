// Crear objeto persona
const persona = {
    nombre: "Martin",
    edad: 25,
    sexo: "H",
    peso: 75,
    altura: 190
};

// Mostrar propiedades del objeto persona en HTML
const resultadoDiv = document.getElementById("resultado");

for (let propiedad in persona) {
    resultadoDiv.innerHTML += `<p><strong>${propiedad}:</strong> ${persona[propiedad]}</p>`;
}