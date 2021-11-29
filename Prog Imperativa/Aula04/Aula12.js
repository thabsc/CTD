// Descrição do problema
// É necessário determinar o vencedor de um concurso de Stand-Up composto por 3
// apresentações por participante.
// O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final
// de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e
// desce.
// Após a apresentação, o público vota indicando quem eles acham que ganhou aquela
// rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a
// terceira.
// Este problema exemplificado em uma planilha ficaria da seguinte forma:

// Como esses concursos são realizados online, milhares acontecem todos os dias.
// Chegamos ao nosso servidor as informações para cada concurso em formato de
// array, uma para cada participante, portanto, as recebemos da seguinte forma:

// A matriz de Alice é: alice = [ 23, 82, 46 ]
// A matriz de Bob é: bob = [ 45, 8, 32]

const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    var totalPrimeiro = 0;
    var totalSegundo = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            totalPrimeiro++;
        } else if
            (a[i] < b[i]) {
            totalSegundo++;
        }
    }
    if (totalPrimeiro > totalSegundo) {
        console.log("O ganhador é: Alice");
    } else {
        console.log("O ganhador é: Bob");
    }
}

encontrarGanhador(alicia, bob);


