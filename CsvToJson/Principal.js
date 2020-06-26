const readFile = require('fs').readFile;
const moment = require('moment');
var fs = require('fs');
const EscreveJson = require('./EscreverJson')
const ConverterCsvParaJson = require ('./Converte')


console.log('Iniciando leitura: \n ' + moment().format("YYYY-MM-DD HH:mm:ss"))
const inicio = new Date().getTime();

readFile('./brasil.csv', 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err);
        throw new Error(err);
    }

    console.log('Leitura finalizada: \n ' + moment().format("YYYY-MM-DD HH:mm:ss"))

    const total = new Date().getTime() - inicio
    console.log('Tempo de leitura: \n' + total + ' milissegundos')


    ConverterCsvParaJson(fileContent)
    .then(result => {
        EscreveJson(result)
        .then(result => {console.log(result); })
        .catch(error => console.log("Erro ao escrever Json: " + error));
    })
    .catch(error => console.log("Erro ao converter Json: " + error));
});







