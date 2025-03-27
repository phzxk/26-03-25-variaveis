var matrizDeFrutas = ["Banana","Maçã","Mamão"]; // declara a variavel matriz chamada frutas, vai receber o nome frutas, Banana esta entre "" pq é uma String, cada fruta é uma String

matrizDeFrutas.push("Abacate"); // push= faz parte da classe de matriz do JavaScript/ empurra o vetor Abacate

console.log(matrizDeFrutas.toString()); //String = texto/ console mostra a matriz de frutas ja convertida em String

// Editando vetores em uma matriz

matrizDeFrutas.splice(1,1,"Laranja"); // "Laranja" valor que vai ser editado/ splice= adicionar

console.log(matrizDeFrutas.toString()); // 