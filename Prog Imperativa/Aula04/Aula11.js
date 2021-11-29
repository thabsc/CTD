
// Repetir como um papagaio

// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for (let contador = 1; contador <=5; contador++) {
    console.log(contador, " - Olá, mundo");
}

// Contando números ímpares

// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console

for (let i = 1; i <=10; i++) {

    if (i%2 != 0){
        console.log("número ímpar =",i)
    }
}

// Criando a tabuada

// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

let tabuadaDoNumero = 5
for (var tabuada = 0; tabuada<=10; tabuada++){
    console.log(tabuadaDoNumero, "vezes", tabuada, "igual a", tabuadaDoNumero*tabuada)
    }

// Mesa de Trabalho

// 1. Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:

// e nos pediram para passar todos os elementos para letras maiúsculas, o que
// na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais
// automática usando loops.

// function convertirMaiuscula (array) {
//     array[0] = array[0].toUpperCase()
//     array[1] = array[1].toUpperCase()
//     array[2] = array[2].toUpperCase()
//     array[3] = array[3].toUpperCase()
//     array[4] = array[4].toUpperCase()
// }

let peliculas = ["star wars", "totoro", "rocky", "pulp", "la vida"]
let filmes = ["eternals", "shangchi", "capita marvel", "spider man", "capitao america"]

function convertirMai (array) {
    for (let i = 0; i < array.length; i++)
    console.log(array[i].toUpperCase());
}

convertirMai(peliculas);

// Agora precisamos modificar a função passagemDeElemento() que nos permite
// adicionar o conteúdo de nossa matriz de filme animado à matriz de filme
// original.



function passagemDeElemento (array1, array2) {
    invalido = array2.pop();
    let qtd = array2.length;
    for(i=0; i< qtd; i++){
        array1.push(array2.pop().toUpperCase());
    }
    return array1   
}

passagemDeElemento(peliculas, filmes);

console.log(peliculas);

// Finalmente, devemos modificar nossa função comparadora para os filmes
// como temos feito até agora.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareFor(a,b) {
for (let x = 0 ;  x<b.length  ; x++ ) {
    
    if (a[x]==b[x]) {
    console.log("${x+1}° elemento é igual")
} else {
    console.log("${x+1}° elemento é diferente")
}
}
}
compareFor(asiaScores,euroScores)

