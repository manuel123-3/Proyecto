const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/productos', (req, res) => {
    res.json([
        { nombre: 'Arroz', precio: 2500 },
        { nombre: 'Frijoles', precio: 3200 },
        { nombre: 'Aceite', precio: 8500 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});