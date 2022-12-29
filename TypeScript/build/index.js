"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        return "hello";
    }
}
const p = new Pessoa(1, "Filipe");
console.log(p.sayHello());
//Classes
/*
Data Modifiers
public
private (somente a Classe vêem as propriedades)
protectec (somente a Classe e subclasses vêem as propriedades)
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();
//p1.name //private não deixa pegar a propriedade do construtor
//p1.stregth // protected somente a Classe e subclasses vêem as propriedades
//Character: superclass
//Magician: subclass
class Magiciam extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magiciam("Mago", 19, 30, 100);
//p2.name // private somente a classe Character pode acessar / modificar
//Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stringArray = concatArray(["Filipe", "Goku"], ["Vegeta"]);
console.log(numArray);
console.log(stringArray);
//Decorators
function exibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    exibirNome
], Funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    exibirNome
], Quincas);
