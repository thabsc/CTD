console.log (!true);
console.log (!false);
console.log (!!false);
console.log (!!true);
console.log (!1);
console.log (!!1);
console.log (!0);
console.log (!!0);
console.log (!!"");
let x = 5 ;
let y = 9;
console.log(x < 10 && x!==5);

let x2=10;
let y2="a";
console.log(y2==="b" || x2 >= 10);

let x3=3;
let y3=8;
console.log(!(x3 == "3" || x3 === y3) && !(y3 !== 8 && x3 <= y3));

let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));


