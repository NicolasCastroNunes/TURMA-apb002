//Promise é uma promessa 
//Resolve - Cumprimos a promessa
//Reject - Rejeita,os a promessa
// REJECTED - 'Promessa quebrada'
const promessa = new Promise((resolve, reject) => {
    let nome = 'Nicolas'

    if (nome == 'Nicolas') {
        resolve({'adm' : 'Nicolas'})
    }else{
        reject('Porque Usuário não é Nicolas')
    }
})

promessa.then((dadosDoResolve) =>{
    console.log(dadosDoResolve)
})

// CATCH - espera que de errado
promessa.catch((infoDoErro) =>{
    console.log(infoDoErro)
})

function sujeitoDemorado(){
    return new Promise((resolve) =>
    setTimeout(() => {
        console.log('RODANDO')
        resolve()},2000
    ))

}

async function carregandoConteudo() {
    console.log('oi')
    await sujeitoDemorado()

 console.log('TERMINEI')

}

carregandoConteudo()