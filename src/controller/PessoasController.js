const PessoasController = {

    listarPessoas:(req, res) => {

        // Carregar o array de pessoas.json
        const pessoas = require('../database/pessoas.json');
    
        // Enviar o array de pessoas para o cliente
        res.send(pessoas)
    
    },

    mostrarPessoa: (req, res) => {
        const id = req.params.id;
    
        const pessoas = require('./database/pessoas.json');
        pessoa = pessoas.find(p => p.id == id);
    
    
        if(pessoa == undefined){
            res.send("Pessoa inexistente");
        } else{
            res.send(pessoa);
        }
    }
}

module.exports = PessoasController;