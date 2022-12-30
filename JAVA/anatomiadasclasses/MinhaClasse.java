package anatomiadasclasses;
public class MinhaClasse{
  public static void main(String[] args) {
    String primeiroNome = "Filipe";
    String segundoNome = "César";
    String nomeCompleto = nomeCompleto (primeiroNome, segundoNome);
    System.out.println(nomeCompleto);
}  

public static String nomeCompleto(String primeiroNome, String segundoNome) {
    // return "Resultado do método: " + primeiroNome +" "+ segundoNome;
    return "Resultado do método: " + primeiroNome.concat(" ").concat(segundoNome);
}
}