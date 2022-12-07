//CLASE PARA DEFIRNIR PRODUCTO

class Producto {
    id;
    nombre;
    descripcion;
    descripcionModal;
    precio;
    imagen;
    categoría;

    constructor(id,nombre,descripcion,descripcionModal,precio,imagen,categoría) {

        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.descripcionModal=descripcionModal;
        this.precio=precio;
        this.imagen=imagen;
        this.categoría=categoría;
    }


//TARJETAS DE PRODUCTOS DINAMICAS

cargarProducto () {
   
    let seccion = document.createElement("div");
    seccion.className = "col-12 col-md-6 col-lg-4";

    let card = document.createElement("div");
    card.className = "card rounded";


    seccion.append (card);

    let imagenProducto = document.createElement ("img");
    imagenProducto.className = "card-img-top rounded";
    imagenProducto.setAttribute("src",`${this.imagen}`);
    imagenProducto.setAttribute("alt",`imagen producto a la venta`);

    card.append (imagenProducto);

    let cardBody = document.createElement ("div");
    cardBody.className = "card-body";

    card.append (cardBody);

    let titulo = document.createElement ("h3");
    titulo.className = "card-title";
    titulo.innerText = `${this.nombre}`;

    cardBody.append (titulo);

    let descripcion = document.createElement ("p");
    descripcion.className = "card-text";
    descripcion.innerText = `${this.descripcion}`;

    cardBody. append (descripcion);

    let detallePrecio = document.createElement ("p");
    detallePrecio.className = "card-text fs-1 fw-bold text-muted text-center";
    detallePrecio.innerText = `$${this.precio}`;

    cardBody.append (detallePrecio);

    let divBotonDetalle = document.createElement ("div");
    divBotonDetalle.className = "d-flex justify-content-center";

    cardBody.append (divBotonDetalle);

    let botonDetalle = document.createElement ("button");
    botonDetalle.className = "btn bg-tikis fs-3 mb-3 font-tikis";
    botonDetalle.innerText = "Ver Detalle";
    botonDetalle.setAttribute("data-bs-toggle","modal");
    botonDetalle.setAttribute("data-bs-target",`#modalDetalle`);
    botonDetalle.addEventListener('click', () => {
        this.modalDetalle(this)
    });


    divBotonDetalle.append (botonDetalle);

    let divBotonCarrito = document.createElement ("div");
    divBotonCarrito.className = "d-flex justify-content-center";

    cardBody.append (divBotonCarrito);

    let botonCarrito = document.createElement ("button");
    botonCarrito.className = "btn bg-tikis fs-3 mb-3 font-tikis";
    botonCarrito.innerText = "Agregar al Carrito";
    botonCarrito.setAttribute("data-bs-toggle","modal");
    botonCarrito.setAttribute("data-bs-target",`#modalAgregarCarrito`);
    botonCarrito.setAttribute("onclick",`agregarCarrito(${this.id})`);

    divBotonCarrito.append (botonCarrito);

    return seccion;
}

//MODAL DETALLE DINAMICO

modalDetalle(){

    let seccion = document.createElement ("div");
    seccion.className = "row bg-light rounded-3 mb-2 mx-4";

    let imagenProducto = document.createElement("div");
    imagenProducto.className = "col 4 my-2 align-self-center"

    seccion.append(imagenProducto);

    let imagen = document.createElement("img");
    imagen.className = "card-img-top img-fluid rounded-3";
    imagen.setAttribute("src", `${this.imagen}`);
    imagen.setAttribute("alt", `imagen producto a la venta`);

    imagenProducto.append(imagen);

    let detalle = document.createElement("div");
    detalle.className = ("col 8 d-flex flex-column")

    seccion.append(detalle);

    let titulo = document.createElement ("h2");
    titulo.innerText = `${this.nombre}`;

    detalle.append (titulo)

    let descripcion = document.createElement ("p");
    descripcion.innerText = `${this.descripcionModal}`;

    detalle.append (descripcion)

    let detallePrecio = document.createElement("p");
    detallePrecio.className = "card-text fs-1 fw-bold text-muted text-center";
    detallePrecio.innerText = `$${this.precio}`;

    detalle.append(detallePrecio);

    let divBotonCarrito = document.createElement ("div");
    divBotonCarrito.className = "d-flex justify-content-center";

    seccion.append (divBotonCarrito);

    let botonCarrito = document.createElement ("button");
    botonCarrito.className = "btn bg-tikis fs-4 mb-3 font-tikis";
    botonCarrito.innerText = "Agregar al Carrito";
    botonCarrito.setAttribute("data-bs-toggle","modal");
    botonCarrito.setAttribute("data-bs-target",`#modalAgregarCarrito`);
    botonCarrito.setAttribute("onclick",`agregarCarrito(${this.id})`);

    divBotonCarrito.append (botonCarrito);

    document.querySelector('#modalDetalle .modal-body').innerText = '';
    document.querySelector('#modalDetalle .modal-body').appendChild(seccion)

};

}
