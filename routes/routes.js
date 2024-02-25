const express = require("express");
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const { get } = require("mongoose");

module.exports = function(){
    //Agrega nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Muestra un cliente
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    //Actualizar Cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    //Eliminar Cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);
    
    /** PRODUCTOS **/
    //Nuevos productos
    router.post('/productos', productosController.subirArchivo, productosController.nuevoProducto);

    //Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);
    
    //Muestra un producto en especifico por su ID
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    //Actualizar Productos
    router.put('/productos/:idProducto', productosController.subirArchivo, productosController.actualizarProducto);

    //Eliminar Productos
    router.delete('/produtos/:idProducto', productosController.eliminarProducto);

    /** PEDIDOS **/
    router.post('/pedidos', pedidosController.nuevoPedido);
    return router;
}