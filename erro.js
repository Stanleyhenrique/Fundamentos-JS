function TratarErroElançar(erro){
    throw new Error('...')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}


function scream(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        TratarErroElançar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
//const obj = { name: 'Roberto'}
scream(obj)