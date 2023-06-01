const express = require('express');
const app = express();

let data = new Date();

let msgdia = require('./msgdodia');  

app.get('/', (req,res)=>{
    let dia = data.getDate();
    let msgSelecionada = msgdia.retornarMsgDia(dia);
    res.json({mensagem:msgSelecionada});
});
app.listen(8080,()=>{
    console.log('Servidor iniciado em: ' +data);
});