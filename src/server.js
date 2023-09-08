// OBJETO DE EXPRESS
const express = require('express')

// COMPONENTES DE RUTA
const port = process.env.PORT || 4000;
const app = require ('./App');

const init = express();

// RUTAS
init.use(app);

app.listen(port, () => console.log('Example app listening on port', port));