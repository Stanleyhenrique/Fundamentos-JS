//função sem retorno
function soma(a,b){
    console.log(a+b)
}
soma(3,7)

//função com retorno

function div(a,b = 0){
    return a + b
}

console.log(div (2,3))