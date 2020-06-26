
const moment = require('moment');
var fs = require('fs');

function EscreveJson(data) {
    const promise = new Promise( (resolve, reject) => { 
                try {
                    console.log('Escrevendo arquivo: \n' + moment().format("YYYY-MM-DD HH:mm:ss"))
                    const inicioEscrita = new Date().getTime()
                    fs.writeFileSync('arquivo.json', data);  
                    console.log('Arquivo criado: \n ' + moment().format("YYYY-MM-DD HH:mm:ss"));
                    const totalEscrita = new Date().getTime() - inicioEscrita
                    console.log('Tempo de criação: \n' + totalEscrita + ' milissegundos')
                } catch (error) {
                    reject(error);
                    }
                });
    return promise;
}

module.exports = EscreveJson