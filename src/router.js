// Importar o express
const express = require('express');

// Importando o controller
const PessoasController = require('./controller/PessoasController');


// Criar o roteador
const router = express.Router();

// Definir/criar as rotas no router
router.get('/', PessoasController.listarPessoas);

router.get('/:id', PessoasController.mostrarPessoa);

// Exportar esse roteador
module.exports = router;