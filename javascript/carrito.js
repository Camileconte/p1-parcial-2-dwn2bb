class Carrito {

    productoCarrito;

    constructor() {

        this.productoCarrito = [];
    }

    incluirProducto(producto) {
        this.productoCarrito.push(producto);
    }

    cantidadProducto() {
        return this.productoCarrito.length;
    }

    mostrarProducto() {

        return this.productoCarrito;
    }

    valorTotalCompra() {

        let sumaValores = 0

        this.productoCarrito.forEach(elemento => {

            sumaValores += elemento.precio;
        });

        return sumaValores;
    }

    // TARJETAS EN CARRITO

    detalleProductoConfirmado(element) {

        var seccion = document.createElement("div");
        seccion.className = "row bg-light rounded-3 mb-2 mx-4";

        let imagenProducto = document.createElement("div");
        imagenProducto.className = "col 4 my-2 align-self-center"

        seccion.append(imagenProducto);

        let imagen = document.createElement("img");
        imagen.className = "card-img-top img-fluid rounded-3";
        imagen.setAttribute("src", `${element.imagen}`);
        imagen.setAttribute("alt", `imagen producto a la venta`);

        imagenProducto.append(imagen);

        let detalle = document.createElement("div");
        detalle.className = ("col 8 d-flex flex-column")

        seccion.append(detalle);

        let botonBorrar = document.createElement("button");
        botonBorrar.className = "btn bg-danger align-self-end p-2";
        botonBorrar.innerText = "Eliminar";
        botonBorrar.setAttribute("onclick", `borrarDelCarrito(${element.id})`);

        detalle.append(botonBorrar);

        let titulo = document.createElement("h3");
        titulo.className = "card-title";
        titulo.innerText = `${element.nombre}`;

        detalle.append(titulo);

        let detallePrecio = document.createElement("p");
        detallePrecio.className = "card-text fs-1 fw-bold text-muted text-center";
        detallePrecio.innerText = `$${element.precio}`;

        detalle.append(detallePrecio);


        return seccion;


    }
}