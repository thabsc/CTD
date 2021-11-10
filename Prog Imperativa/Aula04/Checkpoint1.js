// 1 ͦ Checkpoint de Programação Imperativa!
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".



console.log('\n********************************\n****BEM VINDO AO MICROONDAS*****\n********************************');
console.log('********************************\n*************0.LIVRE************\n********************************');
console.log('********************************\n*************1.PIPOCA***********\n********************************');       //menu
console.log('********************************\n************2.MACARRÃO**********\n********************************');
console.log('********************************\n**************3.CARNE***********\n********************************');
console.log('********************************\n*************4.FEIJÃO***********\n********************************');
console.log('********************************\n***********5.BRIGADEIRO*********\n********************************');




function microondas (prato, tempo) {
    switch (prato){
        // Macarrão e Brigadeiro
        case 'Macarrão':
        case 'Brigadeiro':
            if (tempo<8){
                console.log('Tempo insuficiente!');
            } else if (tempo >= 24){
                console.log('KABUMM!!');
            } else if (tempo >= 16) {
                console.log('A comida queimou!');
            } else {
                console.log('Prato pronto!');
            }
            break;
        // Pipoca
        case 'Pipoca':
            if (tempo<10){
                console.log('Tempo insuficiente!');
                } else if (tempo >= 30){
                    console.log('KABUMM!!');
                } else if (tempo >= 20) {
                    console.log('A comida queimou!');
                } else {
                    console.log('Prato pronto!');
                }
                break;
        // Feijão
        case 'Feijão':
            if (tempo<12){
                console.log('Tempo insuficiente!');
                } else if (tempo >= 36){
                    console.log('KABUMM!!');
                } else if (tempo >= 24) {
                    console.log('A comida queimou!');
                } else {
                    console.log('Prato pronto!');
                }
                break;
        // Carne
        case 'Carne':
            if (tempo<15){
                console.log('Tempo insuficiente!');
                } else if (tempo >= 45){
                    console.log('KABUMM!!');
                } else if (tempo >= 30) {
                    console.log('A comida queimou!');
                } else {
                    console.log('Prato pronto!');
                }
                break;
        default:
            console.log ('Prato inexistente!');
            break;
    }
}

microondas ('Brigadeiro', 8)
microondas ('Macarrão', 8)
microondas ('Brigadeiro', 7)
microondas ('Macarrão', 16)
microondas ('Brigadeiro', 25)
microondas ('Pipoca', 11)
microondas ('Feijão', 25)
microondas ('Carne', 16)
microondas ('Sopa', 8)