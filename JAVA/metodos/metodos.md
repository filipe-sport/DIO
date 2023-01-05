* Criação

* Visibilidade: public, protected ou private
Tipo: concreto ou abstrato
Modificador: static ou final
* Retorno: tipo de dado( dados primitivos / objeto / classe) ou void ("vazio")
* Nome: nome que é fornecido ao método
* Parâmetro: parâmetros que pode receber
Exceções: exceções que pode lançar
* Código: código que possui ou vazio

Exemplos:

public String getNome(){}
public double calcularTotalNota(){}
public int verificarDistancia( int coordenada1, int coordenada2){}
public abstract void executar();
public void alterarFabricante(Fabricante fabricante){}
public Relatorio gerarDados(Cliente cliente, List<Compra> compras){}

no geral: public static Retorno Nome (Parametros){}

Utilização

nome_da_classe.nome_do_metodo(); ou nome_da_classe.nome_do_metodo(...);
nome_do_objeto.nome_do_metodo();nome_do_objeto.nome_do_metodo(...);

Exemplos:
Math.random(); ou Math.sqrt(4);
usuario.getEmail(); ou usuario.alterarEndereco(endereco);
