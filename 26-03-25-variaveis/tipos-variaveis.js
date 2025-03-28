// Verificando tipos de variaveis

let valor = "Hello"; 
console.log(typeof valor); // string // para indentificar uma variavel temos que usar typeof

valor = 10; 
console.log(typeof valor); // number

valor = parseFloat(10.12);
console.log(typeof valor); // float number

valor = valor != 0; // true
// console.log(valor != 0 ? "ok" : "nok"); // ok
console.log(typeof valor); //boolean

valor = BigInt("972365482342657203472340827354757353513985235822");
console.log(typeof valor); // bigint

let varUndefined; // variavel indefinida
console.log(typeof varUndefined); // undefined null value

class Objeto { // define um objeto que se chama Objeto
    constructor(paramOne, paramTwo) { // apenas para identificar como dentro de um parametro, quando o segundo parametro 2 não é enviado, o parametro 2 é undefined
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo); // undefined // vai exibir no console que a propiedade paramTwo é indefinida, pelo fato de não ter sido enviado 
    }
}

const objeto = new Objeto("Só parametro 1"); // a variavel objeto, vai receber um novo Objeto
console.log(typeof objeto); // object class // vai exibir o tipo da vriavel Objeto se tornando object

valor = document.getElementById("elementoInexistente"); //valor = null; // a variavel vai receber um elemento inexisntente e recebe um valor como se fosse nulo
console.log(typeof valor); // undefined null // vai mostrar undefined por que ele é inexistente, não existe

valor = ["vetor1","vetor2"];
console.log(typeof valor); // array object

const date = new Date(); // 
console.log(typeof date); // date object // vai exibir no console o objeto no tipo "date"

console.log(date); // vai mostrar tudo sobre a variavel/objeto