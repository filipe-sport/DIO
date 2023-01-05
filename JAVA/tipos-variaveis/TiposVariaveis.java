
public class TiposVariaveis{
    public static void main(String[] args) {
        String meuNome = "Filipe César";
        byte idade = 123;
        short ano = 2021;
        int cep = 50750570;
        long cpf = 98765432109L; //termina com L
        float pi = 3.14F; //termina com F
        double salarioMinimo = 2500.33;     
    
    short numeroCurto = 1;
    int numeroNormal = numeroCurto;
    short numeroCurto2 = (short) numeroNormal; //short foi declarado novamente pois int numeroNormal > shortnumeroCurto2
    
    int numero = 5;
    numero =10;
    System.out.println(numero);

    final double VALOR_DE_PI = 3.14; // variável não pode ter seu valor alterado com a nomenclatura final e/ou CAIXA ALTA

    }
}
