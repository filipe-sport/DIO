"use strict";
// Tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Filipe";
let idade = 38;
let altura = 1.90;
//Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipps abrangentes: any, void
let retono;
let retornoView = "RETORNA QUALQUER COISA!!!";
//Objeto - sem previsibilidade
let produto = {
    name: "Filipe",
    cidade: "Recife",
    idade: 38
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5
};
//Arrays
let dados = ["Filipe", "Ana", "Fernanda"];
let dados2 = ["Filipe", "Jamilly", "Costa"];
console.log(dados);
console.log(dados2);
let infos = ["Filipe", 123];
//Tuplas (é determinada a ordem a ser obedecida)
let boleto = ['conta de agua', 51.94, 56.78];
//Métodos Arrays
dados.map;
dados.pop;
dados.filter;
dados.reduce;
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
//Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Filipe"));
