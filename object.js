const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 1.999
prod1['desconto a vista de'] = 100 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Notebook',
    preco: 2.000
}
prod2['desconto a vista de'] = 100 + ['reais']

console.log(prod2)