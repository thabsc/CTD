function teste1 (x,y) {
    return y-x;
}
console.log(teste1(10,40));

function teste2 (x, y) {
    return x * 2
    console.log(x)
    return x / 2
}

console.log(teste2(10));

function pcm (polegada) {
    return polegada * 2,54;
}

console.log(pcm(5));

function url2 (string) {
    return `http://www.${string}.com.br`;
}

console.log(url2("funcaojs"));

function string(string) {
    return `${string}!`;
}

console.log(string("string"));

function dogs(idade) {
    return idade * 7;
}

console.log(dogs(10));

function salario(mensal) {
    return mensal / 160;
}

console.log(salario(500));

function imc(altura,peso) {
    return Math.round((peso/ Math.pow(altura,2)),2);
}

console.log(imc(1.72,70));

function convert2(string){
    return string.toUpperCase();
}

console.log(convert2("ola"));

function tipo(dado) {
    return typeof(dado);
}

console.log(tipo(2));

function circunf(raio) {
    return (2 * Math.PI * raio);
}

console.log(circunf(10));
