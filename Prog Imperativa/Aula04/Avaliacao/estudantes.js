// CHECKPOINT 03 - PROGRAMAÇÃO IMPERATIVA - TURMA

const aluno = require('./aluno');


let estudantes = [
    new aluno("Issao", 2, [7,8,9]),
    new aluno("Thabata", 1, [8,7,9]),
    new aluno("Danielle", 3, [7,8,7]),
    new aluno("Maryanne", 4, [9,8,8]),
    new aluno("Luiz", 0, [7,8,9]),
    new aluno("Patricio", 0, [8,9,7]),
];

module.exports = estudantes;