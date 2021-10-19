//par nome/valor
const saudacao = 'Olá' //context léxico 1


function exec() {
    const saudacao = 'hello'
    return saudacao
}

 //objetos são grupos aninhados de pares nome/valor
 const paciente = {
     nome: 'Stanley',
     idade: 22,
     peso: 90,
     endereco: {
         logradouro: 'RuaFarias Lima',
         numero: 70
     }
 }

 console.log(saudacao)
 console.log(exec())
console.log(paciente)