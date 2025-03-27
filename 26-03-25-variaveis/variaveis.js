// variaveis

var nomeDaVariavel = "Valor da Variavel"; // var= variavel, se torna uma variavel da aplicaçao, onde se pode alterar o valor e nao o nome

let nomeDaVariavelTemporaria = "Valor temporario da Variavel"; // let= variavel temporaria, serve so ate finalizar o script e o valor é temporario, e assim que se encerra ela some

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variavel"; // const= permanece na memoria, mas nao consegue alterar o valor dela, somente leitura!

console.log("nomeDaVariavel:", nomeDaVariavel); // log, para ver o nome da variavel e aparece no console apertando o f12

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria); //

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura); //

var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5"]; // variavel matriz

console.log("matriz, vetor1:", matriz[0]); // chamando a variavel matriz, so que vetor1, toda matriz se inicia com vetor0, (piadas de nerd) vetor0 = ao o vetor1

for (let i = 0; i < matriz.length; i++){ // o for sempre precisa ter um inicio, um meio e um fim, let é o inicio, o i é o indexsador que forneça chave pro vetor, meio= sobre o limite de tudo, .length leitura de quantidades de vetores, i++ durante. 
    console.log("matriz[" + i + "]:", matriz[i]); // vai mostrar no console qual vetor, que a variavel vai estar exibindo e ao lado direito temos a chamada da variavel e chamando o vetor da variavel atraves do [] se i começa com 0 a primeira exibiciçao é 0, somando com i = 0
}

class NomeDoObjeto { //
    constructor (paramentroUm, parametroDois) {
        //this.parametroUm = "Valor Um";
        //this.parametroDois = "Valor Dois";
        this.parametroUm = paramentroUm; // this= refere se ao objeto , refere a ele mesmo
        this.parametroDois = parametroDois;
    } 
    metodoMostrarParametros(parametroUm, parametroDois) {
        //this.parametroUm = "Valor 1"; exemplo que tem como deixar relativo e fixo
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois;
    }
}
const novoObjeto = new NomeDoObjeto(); //declara ele como novo objeto 
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));

class Lasanha {
    constructor(gosto, textura, cor, cheiro, tamanho, sabores, preços, peso ) {
        this.parametroUm = gosto;
        this.parametroDois = textura;
        this.parametroTres = cor;
        this.parametroQuatro = cheiro;
        this.parametroCinco = tamanho;
        this.parametroSeis = sabores;
        this.parametroSete = preços;
        this.parametroOito = peso;
    }

    metodoLasanha(gosto, textura, cor, cheiro, tamanho, sabores, preços, peso) {
        this.gosto = gosto;
        this.textura = textura;
        this.cor = cor;
        this.cheiro = cheiro;
        this.tamanho = tamanho;
        this.sabores = sabores;
        this.preços = preços;
        this.peso = peso;
        console.log(this);
        return this.textura + " - " +
        this.gosto +
        " - " +
        this.cor +
        " - " +
        this.cheiro +
        " - " +
        this.tamanho +
        " - " +
        this.sabores +
        " - " +
        this.preços +
        " - " +
        this.peso;
    }
} 
const LasanhaObjeto = new Lasanha();
console.log("Lasanha:", LasanhaObjeto.metodoLasanha("gosto", "textura", "cor", "cheiro", "tamanho", "sabores", "preços", "peso" ));
     