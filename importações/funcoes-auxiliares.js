const entradas = [5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i=0;
function gets(){
let tamanho = entradas.length;
const valor = entradas[i];
i++;
return tamanho, valor;
}

function print(texto){
    console.log(texto);
}

// module.exports.gets = gets;
// module.exports.print = print;
module.exports = {gets, print};