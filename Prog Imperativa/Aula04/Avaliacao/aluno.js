function Aluno (nome, QtdFaltas, notas){
    this.nome = nome;
    this.QtdFaltas=QtdFaltas;
    this.notas=notas;
    this.calcularMedia = function(){
        let soma = this.notas.reduce((acumulador, valor) =>{
            return acumulador + valor;
        })
        return Number((soma/(this.notas.length)).toFixed(2));
    }
    this.faltas = function(){
        return this.QtdFaltas ++
    }
};


module.exports = Aluno;


let aluno1 = new Aluno("José Lucas", 0, [6, 7, 10]);

console.log(aluno1.calcularMedia());

// aluno1.faltas(1);
// aluno1.faltas(1);

// console.log(aluno1.QtdFaltas);