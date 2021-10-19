
const pessoa = {
    nome: 'Stanley',
    idade: 22,
    endereco: {
        logradouro: 'Rua Farias Lima',
        numero: 70
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n,i)

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero)

const { Sobrenome, Tiposanguineo = true} = pessoa
console.log(Sobrenome, Tiposanguineo)