var arrayNumeros = () => {

    let vector1 = [];

    for (let i = 0; i < 5 ; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;

        vector1.push(numeros);
    }

    document.getElementById("mostrarArray").textContent = vector1;

};

