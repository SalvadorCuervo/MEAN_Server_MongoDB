const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        producto = new Producto( req.body ); //Creamos Modelo Producto
        await producto.save(); //Guardamos el Producto en la BD
        res.send( producto ); //Enviamos el Producto Agregado en Respuesta
    } catch (error) {
        console.log( error );
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json( productos );
    } catch (error) {
        console.log( error );
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body; //Obtenemos los datos enviados en el Request
        let producto = await Producto.findById( req.params.id ); //Obtenemos el Producto de la BD

        if( !producto ){
            res.status(404).json({ msg: 'No existe el producto' });
        }else{
            producto.nombre = nombre;
            producto.categoria = categoria;
            producto.ubicacion = ubicacion;
            producto.precio = precio;

            producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
            res.json( producto );
        }
    } catch (error) {
        console.log( error );
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductoById = async (req, res) => {
    try {
        let producto = await Producto.findById( req.params.id ); //Obtenemos el Producto de la BD

        if( !producto ){
            res.status(404).json({ msg: 'No existe el producto' });
        }else{
            res.json( producto );
        }
    } catch (error) {
        console.log( error );
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById( req.params.id ); //Obtenemos el Producto de la BD

        if( !producto ){
            res.status(404).json({ msg: 'No existe el producto' });
        }else{
            await Producto.findOneAndRemove({ _id: req.params.id });
            res.json({ msg: 'Producto eliminado con exito' });
        }
    } catch (error) {
        console.log( error );
        res.status(500).send('Hubo un error');
    }
}