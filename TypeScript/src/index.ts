// Tipos primitivos: boolean, number, string
let ligado : boolean = false;
let nome : string = "Filipe";
let idade : number = 38;
let altura : number = 1.90;

//Tipos especiais: null, undefined
let nulo : null = null;
let indefinido : undefined = undefined;

//Tipps abrangentes: any, void
let retono : void
let retornoView : any = "RETORNA QUALQUER COISA!!!"

//Objeto - sem previsibilidade
let produto:object = {
    name: "Filipe",
    cidade: "Recife",
    idade: 38
};

//Objeto Tipado - Com previsibilidade
type ProdutoLoja = {
    nome : string,
    preco : number,
    unidades : number,
}

let meuProduto : ProdutoLoja = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5
}

//Arrays

let dados : string[] = ["Filipe","Ana", "Fernanda"]
let dados2 : Array<string> = ["Filipe","Jamilly", "Costa"]
console.log(dados);
console.log(dados2);

let infos: (string | number)[] = ["Filipe", 123];

//Tuplas (é determinada a ordem a ser obedecida)

let boleto : [string, number,number] = ['conta de agua', 51.94, 56.78];

//Métodos Arrays
dados.map
dados.pop
dados.filter
dados.reduce

//Datas
let aniversario : Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());

//Funções

function addNumber (x : number, y : number) : number{
    return x + y;
}
let soma : number = addNumber (4 ,7)

console.log(soma)

function addToHello(name : string){
    return `Hello ${name}`;
}
console.log(addToHello("Filipe"));

function CallToPhone ( phone: number | string)
        : number | string {
    return phone;
}
console.log(CallToPhone(81988557722));

//Funções Assincronas

async function getDataBase(id:number)
            : Promise <number|string> {
    return "Filipe"
}

//Interfaces (type x interface)
//trabalha-se com variavel
type robot = {
    readonly id: number | string; //não se pode alterar valores
    name: string;
}
const bot1: robot = {
    id: 1,
    name:"megaman"
}

//trabalha-se com classe
interface robot2 {
    id: number | string;
    name: string;
    sayHello(): string;
    
}
const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1);
console.log(bot2);

//console.log(bot1.id = 1); //vai dar error devido ao atributo readonly
console.log(bot2.id = 2);

class Pessoa implements robot2{
    id: number | string;
    name: string;
    
    constructor(id: string|number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
       return "hello"
    }
}
const p =new Pessoa (1, "Filipe")
console.log(p.sayHello());


