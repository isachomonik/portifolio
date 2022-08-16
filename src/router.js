// Importar o express
const express = require('express');

// Criar o roteador
const router = express.Router();

// Definir/criar as rotas no router
router.get('/', (req, res) => {
    res.send('Hello world!')
});

router.get('/about', (req, res) => {
    res.send("We don't have an about yet. Actually we don't know what we do :P")
});

// Exportar esse roteador
module.exports = router;