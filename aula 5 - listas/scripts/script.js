//var fruta1 = 'Melancia'
//var fruta2 = 'Tomate'
//var fruta3 = 'Goiaba'
//var fruta4 = 'Morango'

fruta = ['melancia', 'tomate', 'goiaba', 'morango']
teste = Array()
teste[0] = 'Olha'
teste[1] = 'que'
teste[2] = 'top'

// PSUH - Adicionar na lista
fruta.push('uva')
console.log(fruta)


// UNSHIFT - adicionar no começo da lista
fruta.unshift('Abacate')
console.log(fruta)

// POP - Remover o ultimo
fruta.pop()
console.log(fruta)

// SJIFT - remover o primeiro 
fruta.shift()
console.log(fruta)

// SPLICE - Remove, adiciona ou atuliza
fruta.splice(2, 1)
console.log(fruta)

fruta.push('Abacaxi')

console.log(fruta.lenght)
console.log(fruta)

for(var i = 0;i < fruta.lenght;i++){
    document.getElementById('resposta')
    innerHTML += `
        ${fruta[i]}
    `
}

fruta.forEach(cadaFruta => {
    document.getElementById('resposta').
    innerHTML += `
    ${cadaFruta}<br>
    `
});