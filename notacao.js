console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
// obj['nome'] = bola 2

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Quarto')
    }
}

const obj2 = new Obj('Fachada')
const obj3 = new Obj('Garagem')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()