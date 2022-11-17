const pessoa = {
    nome: "Filipe César",
    idade: 38,
    descrever: function(){
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`)
    },

};

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.descrever();
console.log(pessoa)

const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);

pessoa['nome'] = "Félix";
console.log(pessoa['nome']);

//--------------------------------
console.log(("--").repeat(25))

class Pessoa{
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é: ${this.nome} e idade: ${this.idade}`)
    }
}

const filipe = new Pessoa();
filipe.nome = "Filipe César";
filipe.idade = 38;

filipe.descrever()

const hora = new Pessoa('Hora', 28)
hora.descrever()
console.log(hora)