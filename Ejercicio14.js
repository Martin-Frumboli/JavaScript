const libro = {

    ISBN : 0 ,
    titulo : "" ,
    autor : "" ,
    cantidadDePaginas : 0,

    cargarLibro : function(){

        this.ISBN = document.getElementById("isbnInput").value;

        this.titulo = document.getElementById("tituloInput").value;

        this.autor = document.getElementById("autorInput").value;

        this.cantidadDePaginas = document.getElementById("numPaginasInput").value;

        this.mostrarLibro();
    },

    mostrarLibro : function() {

        document.getElementById("isbnOutput").textContent = "ISBN: " + this.ISBN ;

        document.getElementById("tituloOutput").textContent = "Titulo: " + this.titulo ;

        document.getElementById("autorOutput").textContent = "Autor: " + this.autor ;

        document.getElementById("numeroPaginasOutput").textContent = "Cantidad Paginas: " + this.cantidadDePaginas ;

    },};


    //Obtener referencia al boton 
    const cargarBtn = document.getElementById("cargarBtn");

    //Asignar evento del clic al boton
    cargarBtn.addEventListener("click", function() {

        libro.cargarLibro();
    });