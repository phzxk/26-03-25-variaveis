class NomeDoObjeto { // declaraçao da classe NomeDoObjeto, a qual se transfomara em um novo objeto quando declarada em uma variavel novoObjeto
    contructor(parametroUm, parametroDois, parametroTres) {
        this.parametroUm = parametroUm; // PARAMETRO É UMA PROPIEDADE DE CLASSE (QUANDO DECLARADO COM THIS. antes)
        this.parametroDois = parametroDois;
        this.parametroTres = parametroTres;
    }
    metodoMostrarParametros(parametroUm, parametroDois, parametroTres) { // declaraçao do metodo que vai mostrar os parametros, nao as propiedades
        this.parametroUm = parametroUm;  // PARAMETRO É UMA PROPIEDADE DE CLASSE (QUANDO DECLARADO COM THIS. antes)
        this.parametroDois = parametroDois;
        this.parametroTres = parametroTres;
        return parametroUm + // faz o metodo retornar o valor declarado apos o return
           " - " +
           parametroDois +
           " - " +
           parametroTres;
    }
}
const novoObjeto = new NomeDoObjeto(); // const (constante)= somente leitura  / Inicial minusculoa camelCase, primeira letra maiuscula pascalCase
console.log (novoObjeto.metodoMostrarParametros("parametro 1","parametro 2","parametro 3"));