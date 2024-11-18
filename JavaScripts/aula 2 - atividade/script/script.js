var n1 = Number(prompt ('Digite o Número que você deseja calcular'))
var n2 = Number(prompt ('Digite o segundo número'))

var SOMA =  Number ()
var SUBTRAÇÃO = Number ()
var DIVISÃO = Number()
var MULTIPLICAÇÃO = Number()
var resultado 


    alert('ESCOLHA UMA FÓRMULA')
    escolha = prompt('(A)SOMA, (B)SUBTRAÇÃO, (C)DIVISÃO, (D)MULTIPLICAÇÃO')
    switch(escolha){
        case 'A' :  
       resultado = n1 + n2
        break

        case'B' :
        resultado = n1 - n2
        break

        case 'C' :
        resultado = n1 / n2
        break

        case'D' :
        resultado = n1 * n2
        break
         }


  alert ('O valor da sua conta deu'+resultado)