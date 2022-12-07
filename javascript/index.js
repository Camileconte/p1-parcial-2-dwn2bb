
/*
 *  BOCUTTI SANTIAGO  - LECONTE CAMILA
 */

//LISTA DE PRODUCTOS

let productos = [
    {
        id: 1,
        nombre: 'Baberos Ribbit',
        descripcion: 'Baberos estampados y bordados (Rana y Cocodrilo)',
        descripcionModal: `Baberos importados de algodón tricapa, no dejan pasar la humedad. Variedad de estampas y bordados `,
        precio: 800,
        imagen: 'elementosgraficos/img/productos/babero.jpeg',
        categoría: 'Accesorios',
    },
    {
        id: 2,
        nombre: 'Conjunto "Beatiful"',
        descripcion: 'Conjunto "Beatiful" de 3 piezas (remera,buzo y calsa)',
        descripcionModal: `Buzo de rustico de algodón bordado al frente, remera juego y calza de algodón con glitter `,
        precio: 3200,
        imagen: 'elementosgraficos/img/productos/conjunto.jpeg',
        categoría: 'Indumentaria',
    },
    {
        id: 3,
        nombre: 'Manta para Juegos',
        descripcion: 'Manta estampada didactica, se convierte en bolso',
        descripcionModal: `Manta para juego circular, de 1,20 cm de diámetro. Se convierte fácilmente en bolso porta juguetes`,
        precio: 5800,
        imagen: 'elementosgraficos/img/productos/manta.jfif',
        categoría: 'Juguetes',
    },
    {
        id: 4,
        nombre: 'Buzo "Brave"',
        descripcion: 'Buzo con estampa de tigre, media temporada',
        descripcionModal: `Buzo de rustico de algodón estampado. Variedad de estampas`,
        precio: 2100,
        imagen: 'elementosgraficos/img/productos/buzo.jpeg',
        categoría: 'Indumentaria',
    },
    {
        id: 5,
        nombre: 'Remera Flores',
        descripcion: 'Remera manga corta con estampa floreada',
        descripcionModal: `Remera de jersey de algodón estampada. Variedad de estampas`,
        precio: 1200,
        imagen: 'elementosgraficos/img/productos/remera.jpeg',
        categoría: 'Indumentaria',
    },
    {
        id: 6,
        nombre: 'Pelota Montessori',
        descripcion: 'Pelota Montessori didáctica con cascabeles',
        descripcionModal: `Pelota Montessori ideal para bebés de 0 a 9 meses, ya que sirve para estimular los sentidos mientras juegan.`,
        precio: 4200,
        imagen: 'elementosgraficos/img/productos/pelota.jfif',
        categoría: 'Juguetes',
    },
];

let seccionProductos = document.querySelector("#ventaProductos");

let carritoCompras = new Carrito();

let cantidadProductos = document.querySelector("#cantidadProductos");

let descripcionAmplia = document.querySelector("#descripcionAmplia")

function mostrarProductos(grupoDeProductos){

grupoDeProductos.forEach((elemento) => {

    let nuevoProducto = new Producto(elemento.id, elemento.nombre, elemento.descripcion, elemento.descripcionModal, elemento.precio, elemento.imagen, elemento.categoría);

    seccionProductos.append(nuevoProducto.cargarProducto());

})}


function agregarCarrito(productoSeleccionado) {

    let productosSeleccionados = productos[productoSeleccionado - 1];

    let nuevoProducto = new Producto(productosSeleccionados.id, productosSeleccionados.nombre, productosSeleccionados.descripcion, productosSeleccionados.descripcionModal, productosSeleccionados.precio, productosSeleccionados.imagen, productosSeleccionados.categoría);


    carritoCompras.incluirProducto(nuevoProducto);

    //MUESTRA CANTIDAD TOTAL 

    cantidadProductos.innerText = carritoCompras.cantidadProducto();

    let productoEnCarrito = document.querySelector("#productoEnCarrito");
    productoEnCarrito.innerText = '';
    let misProdcutos = carritoCompras.mostrarProducto();


    valorTotal();

    misProdcutos.forEach(elemento => {

        productoEnCarrito.append(carritoCompras.detalleProductoConfirmado(elemento));

    })

}


// SUMA TOTAL DE COMPRA

function valorTotal() {

    let total = document.querySelector("#total")

    total.innerText = carritoCompras.valorTotalCompra();

};

// FILTRAR

document.querySelector("select").addEventListener("change", (e) => {
    
    //LA "e" GUARDA LA OPCIÓN ELEGIDA PARA COMPARAR
    
    let categoría = e.target.value;

    if (categoría != "Todas") {

    let filtrado = productos.filter((producto) => producto.categoría.includes(categoría));

    seccionProductos.replaceChildren();

    mostrarProductos(filtrado);

    
    } else {
        seccionProductos.replaceChildren();
        mostrarProductos(productos);
    }

}); 


mostrarProductos(productos);
