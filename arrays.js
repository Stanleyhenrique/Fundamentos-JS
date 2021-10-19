const valores = [7.9, 6.9, 5.8, 5.9]
console.log(valores[0], valores[3])
console.log(valores[10])

valores[4] = 10 
console.log(valores)
console.log(valores.length)

valores.push({id: 10}, false, null , 'false')
console.log(valores)

console.log(valores.pop())
delete valores [0]
console.log(valores)
