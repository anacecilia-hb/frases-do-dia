let dados = require('./dados');

function retornarMsgDia(dia){
    return dados.frases[dia -1];

}

exports.retornarMsgDia = retornarMsgDia;