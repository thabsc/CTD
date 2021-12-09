// CHECKPOINT 03 - PROGRAMAÇÃO IMPERATIVA - TURMA

// Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).


const aluno = require('./aluno');

const listaDeEstudantes = require('./estudantes');

let curso = {
    nome: "Certified Tech Developer",
    notaDeAprovacao: 7,
    faltasMax: 3,
    estudantes: listaDeEstudantes,
    addAluno: function(nome, QtdFaltas, notas){
        let novoAluno = new aluno(nome, QtdFaltas, notas)
        this.estudantes.push(novoAluno)
    },
    alunoAprovado: function (estudante){
        let alunoSelecionado;
        let media = 0;
        let faltas = 0;
        for(let housers of this.estudantes){
            if(housers.nome === estudante){
                alunoSelecionado = housers;
                media = alunoSelecionado.calcularMedia();
                faltas = alunoSelecionado.QtdFaltas;
            
            
            } 
            console.log(housers);
            console.log(estudante);
        }
        if(media >= this.notaDeAprovacao && faltas < this.faltasMax || media >= (this.notaDeAprovacao*1.10) && faltas == this.faltasMax ){
            return true;
        }
        else{
            return false;
        }
    },
    listaAlunosAprovados: function(){
        let novaLista = this.estudantes.map((housers) =>{
            return this.alunoAprovado(housers.nome);
        })
        return novaLista;
    }
};


// curso.addAluno("João", 2, [7,8,8]);

// console.log(curso.estudantes);

// console.log(curso.alunoAprovado("Issao"));

console.log(curso.listaAlunosAprovados());








// Passo 7 -

// 	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).


// 'estudantes.js' importado - OK