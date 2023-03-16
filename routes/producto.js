const express = require( 'express' );
const router = express.Router();

const productoController = require( '../controllers/productoController' );

// .../api/productos
router.post( '/', productoController.crearProducto ); //Agregar
router.get( '/', productoController.obtenerProductos ); //Obtener Todos
router.put( '/:id', productoController.actualizarProducto ); //Editar
router.get( '/:id', productoController.obtenerProductoById ); //Obtener por Id
router.delete( '/:id', productoController.eliminarProducto ); //Eliminar

module.exports = router;