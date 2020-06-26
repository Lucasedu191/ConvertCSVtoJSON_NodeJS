

const csvjson = require('csvjson');
//const Papa = require('papaparse')
const moment = require('moment');
var fs = require('fs');


/* ConverterCsvParaJson(){
    const continua = setInterval() ->{
        if(Queue.filaCSV.length ===0){
            console.log('Tamanho filaCSV: ', Queue.filaCSV.length)
            if(Queue.terminouProcessoCSV){
                clearInterval(continua)
            }
        }else{
            console.log('Queue: ', Queue.filaCSV.length)
            const csv = Queue.filaCSV.shift()
            const data = Papa.parse(csv)
            Queue.filaJSON.push(data)
        }
    }, 0)
}
 */

function ConverterCsvParaJson(fileContent) {
    const promise = new Promise( (resolve, reject) => { 
        try {
            console.log('Convertendo arquivo: \n ' + moment().format("YYYY-MM-DD HH:mm:ss"))
            const inicioConversao = new Date().getTime()
            let data = JSON.stringify(csvjson.toObject(fileContent));    
            console.log('Arquivo convertido: \n ' + moment().format("YYYY-MM-DD HH:mm:ss"))
            const totalConvert = new Date().getTime() - inicioConversao
            console.log('Tempo total de conversão: \n ' + totalConvert + ' milissegundos')
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    });
    return promise;
}

module.exports = ConverterCsvParaJson