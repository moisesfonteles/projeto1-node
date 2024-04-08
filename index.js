const express = require("express");
const app = express();

app.get("/consulta/", function(req, res) {

    var cpf = req.query["cpf"];

    if(cpf) {
        res.send("retorno consulta cpf = "+ cpf);
    } else {
        res.send("cpf não foi informado");
    }

})

app.listen(4000, function(erro) {
    if(erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})