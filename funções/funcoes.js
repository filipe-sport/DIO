function incrementarJuros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100)*valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));
//-------------------------------------
console.log(("-").repeat(30))

function main (){
    console.log("Programa Principal")
}
main();
//-------------------------------------
console.log(("-").repeat(30))

function calcularIMC (peso,altura){
    return peso / Math.pow(altura,2);
}


function classificarIMC (imc){
    if (imc < 18.5){
        return "Abaixo do Peso";
    }
    else if ( imc >= 18.5 && imc < 25){
        return "Peso Normal";
    }
    else if ( imc >= 25 && imc < 30){
        return "Acima do Peso";
    }   
    else if ( imc >= 30 && imc < 40){
        return "Obeso";
    }
    else {
        return "Obesidade Grave";
    }
}
function main(peso,altura){
    const imc = calcularIMC(peso,altura);
    classificarIMC(imc);
    console.log(`O seu IMC é : ${imc} e sua classificação é: ${classificarIMC(imc)}`);
    
}
main (98 , 1.75);

//-------------------------------------
console.log(("-").repeat(30))

function escreverNome(nome){
    console.log("Meu nome é "+ nome);
}
escreverNome("Filipe")

//-------------------------------------
console.log(("-").repeat(30))

function verificarIdade (idade){
    if(idade >=18){
        console.log("Maior de Idade!!");
    }
    else{
        console.log("Menor de Idade");
    }
}
verificarIdade(10);
verificarIdade(38);
//-------------------------------------
console.log(("-").repeat(30))

function nomear(nome){
    return "Meu nome é "+ nome;
}

function maioridade (idade){
    if(idade >=18){
        console.log(nomear("filipe") + " Maior de Idade!!");
    }
    else{
        console.log(nomear("filipe") + " Menor de Idade");
    }
}
maioridade(38)

//-------------------------------------
console.log(("-").repeat(30))

function final(){
    return `Meu nome é ${nomear()}, tenho ${calcularIdade()}, e sou do ${padronizarTime()}`
}
function nomear(){
    let nome = "Filipe";
    return nome;
}
function calcularIdade(){
    let idade = 38;
    return idade;
}
function padronizarTime(){
    let time = "Sport";
    return time;
}

let resultadoFinal = final();
console.log(resultadoFinal)