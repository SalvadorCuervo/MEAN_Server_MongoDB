const express = require( 'express' );
const cors = require( 'cors' );
const conectarDB = require( './config/db' );

// 1. Creación de Servidor Express
const app = express();

// 2. Conexion a la BD
conectarDB();
app.use( express.json() );
app.use( cors() );

// 3. Importamos las rutas de producto.js
app.use( '/api/productos', require('./routes/producto') );

// Llamada de la Ruta Principal
//app.get( '/', (req, res) => { res.send('Hola Mundo'); });

app.listen( 4000, () => {
    console.log('El Servidor Esta Activo!!');
});