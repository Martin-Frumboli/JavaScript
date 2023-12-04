const numerosFuncion = () => {

    let vector1 = [];
    let vector2 = [];

    for (let i = 0; i < 5 ; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;

        vector1.push(numeros);
        vector2.push(numeros);
        
    }

    document.getElementById("vector1").textContent = vector1;
    document.getElementById("vector2").textContent = vector2;
    

};