// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

let listaDeCompra = ["banana", "maçã", "lentilha", "chá", "tofu"];
console.log(listaDeCompra);

let ultimoItem = listaDeCompra.pop();
console.log(ultimoItem);


console.log(listaDeCompra.unshift(ultimoItem));
console.log(listaDeCompra);

console.log(listaDeCompra.push("feijão"));
console.log(listaDeCompra);

console.log(listaDeCompra.shift())
console.log(listaDeCompra);

console.log(listaDeCompra.join(","));

// Arrays e Coleções
// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

// Acessar elementos específicos de um array.
// Modificar cada um dos elementos de um array e imprimi-los no console.
// Adicionar elementos a um array.
// Extrair elementos de um array.
// Comparar elementos de um array com os elementos de outro. 


// O que esses códigos retornam?
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
//////////////////// Retorna undefined


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);
//////////////////// Retorna o item [0] da lista [1], neste caso, o "Spiderman"


let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0],
                    ["DigitalD", "House", true],
                    ["string", "123","false", 54, true, str]];

console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
//////////////// Retorna a variável "srt", que por sua vez, retorna a string "una string qualquer"


// Array Invertido
// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

let nomes = ["Heberth", "Catia", "Clara", "James", "Fabiana", "Emanuely"];
function imprimirInverso(array) {
  return array.reverse();
}
console.log(imprimirInverso(nomes));

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
let nomes = ["Heberth", "Catia", "Clara", "James", "Fabiana", "Emanuely"];

function inverter() {
    let array1 = nomes.reverse();
    return array1;
  }
  console.log(inverter());


// somarArray()
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95

function somarArray(array) {
    let somador = 0;
    for (let i = 0; i < array.length; i++) {
      somador += array[i];
    }
    return somador;
  }
  console.log(somarArray([2, 6, 8]));

// Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.
// Por exemplo:
// join(["o","l","á"]) deve retornar a string "olá".
// join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

function join(umArray) {
    let concat = "";

    concat += [0];
    concat += [1];
    concat += [2];
    concat += [3];
    concat += [4];

    return concat;
}
console.log(join(["a","r","r","a","y"]));

// O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
// 	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 

const filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log(filmesSeries[0]);
console.log(filmesSeries[1]);
console.log(filmesSeries[2]);
console.log(filmesSeries[3]);
console.log(filmesSeries[4]);

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

function paraLetrasMaiusculas(valor) {
    console.log(valor[0].toUpperCase())
    console.log(valor[1].toUpperCase())
    console.log(valor[2].toUpperCase())
    console.log(valor[3].toUpperCase())
    console.log(valor[4].toUpperCase())
  }
  
  paraLetrasMaiusculas(filmesSeries);

//   Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
// 	"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
// Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

const filmesSeries2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function teste (valor1,valor2) {
    let valor3 = valor1.concat(valor2)
    console.log(valor3)
  }
  teste(filmesSeries, filmesSeries2);

//   Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
// PS: por precaução, salve o elemento que você vai deletar em uma variável.

let itemDeletado = filmesSeries2.pop();
console.log('Item deletado= '+itemDeletado);
teste(filmesSeries, filmesSeries2);

// Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
// 	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compare(a,b) {
  
  if (a[0] == b[0]) {
      console.log("As notas são iguais")
    } else if (a[0] !== b[0]) {
      console.log("As notas são diferentes")
    }
    
    if (a[1]==b[1]) {
      console.log("As notas são iguais")
    } else if (a[1]!==b[1]) {
      console.log("As notas são diferentes")
      // Fazer para todas as notas
    } else {
      console.log('Erro')
    }
  }
  
  compare(asiaScores,euroScores);


