"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(81988557722));
//Funções Assincronas
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Filipe";
    });
}
const bot1 = {
    id: 1,
    name: "megaman"
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
//console.log(bot1.id = 1); //vai dar error devido ao atributo readonly
console.log(bot2.id = 2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello ${this.name} ${this.id}`;
    }
}
const p = new Pessoa(1, "Filipe");
console.log(p.sayHello());
