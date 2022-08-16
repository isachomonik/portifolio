// 1 - Importar o express
const express = require('express');

// 2 - Criar um aplicação express (const app)
const app = express();

// 3 - Importar e usar o roteador
const router = require('./src/router')

app.use('/', router);

// 4 - Rodar a aplicação (app.listen)
app.listen(3000, () => {console.log("Server running on port 3000")})