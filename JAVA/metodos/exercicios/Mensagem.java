package exercicios;

public class Mensagem {
    public static void obterMensagem (int hora){
        if(hora>=0 && hora<=12){
            mensagemBomDia();
        }
        else if (hora>12 && hora<=18){
            mensagemBoaTarde();
        }
        else if (hora>18 && hora<24){
            mensagemBoaNoite();
        }
        else{System.out.println("Hora Inválida");}
    }
    public static void mensagemBomDia(){
        System.out.println("Bom dia!");
    }
    public static void mensagemBoaTarde(){
        System.out.println("Boa tarde!");
    }
    public static void mensagemBoaNoite(){
        System.out.println("Boa noite!");
    }
}   
