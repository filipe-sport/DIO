package exercicios;

public class Main {
    public static void main(String[] args) {
        //Calculadora
        System.out.println("Exercicio Calculadora");

        Calculadora.soma(3, 6);
        Calculadora.subtracao(9, 1.8);
        Calculadora.multiplicacao(7, 8);
        Calculadora.divisao(5, 2.5);

        //Menssagem
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(13);
        Mensagem.obterMensagem(22);
        Mensagem.obterMensagem(32);

        //Emprestimo

        Emprestimo.calcular(1000, 2);
        Emprestimo.calcular(1000, 3);
        Emprestimo.calcular(1000, 5);
    }
}
