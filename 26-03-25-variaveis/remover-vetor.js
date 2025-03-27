// Removendo vetores de uma matriz:

var matrizDeFrutas = ["Banana","Maçã","Mamão"]; // declara a variavel matriz chamada frutas, vai receber o nome frutas, Banana esta entre "" pq é uma String, cada fruta é uma String

matrizDeFrutas.push("Abacate"); // push= faz parte da classe de matriz do JavaScript/ empurra o vetor Abacate

console.log(matrizDeFrutas.toString()); //String = texto/ console mostra a matriz de frutas ja convertida em String

var indexsadorDoVetor = matrizDeFrutas.indexOf("Maçã"); // Aqui é feita uma busca pelo texto "Maçã" e, se encontrado o texto, retorna o numero do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexsadorDoVetor, 1); // Aqui é retirado o vetor, ora antes encontrado na variavel indexadorDoVetor, sendo o numero 1 a indicaçao da quantidade de vetores; este mesmo método tambem é utilizado para substituir vetores em uma matriz

console.log(matrizDeFrutas.toString());