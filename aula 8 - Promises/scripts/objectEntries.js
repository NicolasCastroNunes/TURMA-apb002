const filmes = {
    'Nome' : 'Robo Selvagem',
    'Desc' : 'Lorem',
    'Temática' : 'Aventura'
}

console.log(filmes)
console.log(filmes.Nome)
//keys - retorna os atributos (chave)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

//entries - retorna em listas os valores (valor)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

//map
const nomesFilmes = ['Velozes e Furiosos', 'Robo Selvagem', 'A Origem', 'Interestelar']

const lista = {
'filmes' : [

        {
        'nome' : 'Robo Selvagem',
        'desc' : 'Lorem',
        },
        {
        'nome' : 'Velozes e Furiosos',
        'desc' : 'Lorem',
        },
    ],

'jogos' : [
        {
        'nome' : 'Minecraft',
        'desc' : 'Lorem',
        },

        {
        'nome' : 'The Last Of Us',
        'desc' : 'Lorem',
        },
    ]
}

const resultado = lista.jogos.map ((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
    `
    
})



const results = lista.filmes.map ((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
    `
    
})


