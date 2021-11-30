// let bemVindo = () => "Olá, Mundo!";
// let dobro = numero => numero *2;
// let soma = (a,b) => a+b;

// let horaAtual = () => {
//     let data = new Date ();
//     return data.getHours() + ":" +
//     data.getMinutes();
// }

// console.log(horaAtual());

// function nomeCompleto(nome, sobrenome){
//     return nome + " " + sobrenome;
// };

// function bomDia(nome, sobrenome, callback) {
//     return "Olá, " + callback(nome, sobrenome);
// };

// bomDia("Amanda", "Ferreira", nomeCompleto);
// console.log(bomDia("Amanda", "Ferreira", nomeCompleto));

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: 
// andar() – deve exibir uma mensagem dizendo que o carro está andando 
// – e parar() – deve exibir uma mensagem dizendo que o carro parou.

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

// let andar = () => console.log("O carro está andando!");

// let parar = () => console.log("O carro parou");

// function andar () {
//     console.log("Carro andando");
// }

// function parar () {
//     console.log("Carro parado");
// }

// function acaoCarro(callback){
//     return callback();
// }


// acaoCarro(andar);


// const fizzBuzz = (A, B) => {

//     let n = 1;

//     while (n <= 100) {
//         if(n % A == 0 && n % B == 0){
//             console.log("FizzBuzz");
//         }else if(n % B == 0){
//             console.log("Buzz");
//         }else if(n % A == 0){
//             console.log("Fizz");
//         } else {
//             console.log(n);
//         }
//         n++;
//     }
// }

// fizzBuzz (5, 7);

const fizzBuzz = (A, B, cb, palavra1, palavra2) => {

    let n = 1;

    while (n <= 100) {
        if(n % A == 0 && n % B == 0){
            console.log(cb(palavra1)+cb(palavra2));
        }else if(n % B == 0){
            console.log(cb(palavra1));
        }else if(n % A == 0){
            console.log(cb(palavra2));
        } else {
            console.log(n);
        }
        n++;
    }
}

fizzBuzz (5, 7, texto, "fizz", "buzz");


function texto(palavra) {
    return palavra;
}



