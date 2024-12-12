
//map
const nomeSalgados = ['Velozes e Furiosos', 'Robo Selvagem', 'A Origem', 'Interestelar']

const lista = {
'Salgados' : [

        {
        'nome' : 'Coxinha',
        'desc' : '2 tabletes de caldo de galinha, Sal a gosto, 6colheres (sopa) de Margarina Qualy Cremosa, 750gde farinha de trigo, 2ovos        , 2xícaras (chá) de farinha de rosca',
        },
    ],

'Doces' : [
        {
        'nome' : 'Bolo de Chocolate',
        'desc' : '2 ovos, 1 e 1/2 xícara chá de açúcar, 2 xícaras chá de farinha de trigo, 1 xícara chá de chocolate em pó ou achocolatado, 2 colheres de sopa de Margarina Doriana com Sal, 1 colher sopa de fermento em pó, 1 pitada de sal, 1 xícara chá de leite',
},
    ],

    'Sucos' : [
        {
        'nome' : 'Suco de uva',
        'desc' : '1 kg de uvas pretas sem o talo, açúcar refinado, 2 xícaras de açúcar refinado, Água, para tapar as uva'}
    ]
}

const resultado = lista.Doces.map ((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
        <h4> ${elemento.desc}</h4>
    `
})



const results = lista.Salgados.map ((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
        <h4> ${elemento.desc}</h4>
    `
    
})


const descrição = lista.Sucos.map ((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome}</h3>
        <h4> ${elemento.desc}</h4>
    `
    
})



