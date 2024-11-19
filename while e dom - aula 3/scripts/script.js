// DOM
// URL - LOCATION
// BOTAO DE VOLTAR - HISTORY
// SITE / CONTEUDO - DOCUMENT

//window.location = "https://www.google.com "

document.getElementById('catalogo').innerHTML ='<h3>OI<h3>'
document.querySelector('#catalogo').innerHTML = 'olá'

function registrarNome(){
    nome = document.querySelector('#inputNome').value
    
    document.querySelector('#catalogo').innerHTML = `<div id="nomeDiv"> ${nome} sou muito brabo progamator </div>`
}


