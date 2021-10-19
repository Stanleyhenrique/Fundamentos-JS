//armazenando uma variavel dentro de uma função
const imprimesoma = function (a,b) {
    console.log(a-b);
}

imprimesoma(2,5)

//armazenando uma função arrow em um variavel
const soma = (a,b) =>{
    return a + b
}

console.log(soma(2,5))

//return explicito 

const mult = (a,b) => a * b
console.log(mult(2,3))