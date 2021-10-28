//Nível 1
function somar(x, y) {
    return x + y;
}
console.log(somar(1,2));

function sub(x, y) {
    return x - y;
}
console.log(sub(1,2));

function mult(x, y) {
    return x * y;
}
console.log(mult(1,2));

function div(x, y) {
    return x / y;
}
console.log(div(1,2));


//Nível 2
console.log(somar(1,1),sub(3,2),mult(3,3),div(3,0));
function quadrado(x) {
    return mult(x,x)
}
console.log(quadrado(2))

//Nível 3
function media(x,y,z) {
    return (somar(x,y)+z)/3
}
console.log(media(3,4,5));

function porcent(x,y) {
    return mult(div(y,100),x)
}
console.log(porcent(100,10));

function gerador(x,y) {
    return div(x,y)
}
console.log(gerador(2,200));

//Thabata Carrion








