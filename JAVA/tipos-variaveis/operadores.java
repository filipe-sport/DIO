import java.util.Date;

public class operadores {
    //classe Operadores.java
    String nome = "Filipe";
    int idade = 38;
    double peso = 92.9;
    char sexo = 'M';
    boolean doadorOrgao = false;
    Date dataNascimento = new Date();

    // Opepradores aritméticos [+ adição, - subtração, * multiplicação, / divisão ]
    // classe Operadores.java
    double soma = 10.5 +15.7;
    int subtração = 113 - 25;
    int multiplicação = 20 * 2;
    int divisão = 15 / 3;
    int moodulo = 12 % 2;
    double resultado = (10 * 3) + (20 / 4);

    public static void main(String[] args) {
        int numero = 5;
        numero = - numero;
        System.out.println(numero);

        int numero1 = - numero; // OU numero * -1;        
        System.out.println(numero1);

        // -------------------------------------------//
        
        int numero2 = numero1++;
        int numero3 = numero1++;
        int numero4 = ++numero1 ;

        System.out.println(numero2);
        System.out.println(numero3);
        System.out.println(numero4);

        
    }
    
    
    

}
