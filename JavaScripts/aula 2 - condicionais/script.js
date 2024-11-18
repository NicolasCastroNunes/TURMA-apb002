function explicacao1(){
    // SE CONDICAO / SENAO
    escolha = confirm('DESEJA RODAR TRUE OU FALSE')
    alert(escolha)

    if (escolha){
        //console.log ('FIZ O SE')
        alert("voce escolheu true")
    }else{
        //console.log('senao')
        alert("voce escolheu o false")
    }
    
}

function explicacao2(){
    alert("SEJA BEM VINDO A LOJA!")
    escolha = prompt('(A)Pote no bolo R$ 5,00, (B) Açai R$ 8,00, (C) TORTA R$ 15,00')
    switch(escolha){
        case 'A':
        alert('Voce escolheu pote no bolo')
        break

        case'B':
        alert('Voce escolheu açai')
        break

        case'C':
        alert('Voce escolheu torta')
        break

    }
}

function explicacao3(){
    idade = Number(prompt('Digite sua idade'))
    if(idade >=18){
        alert('Seja bem vindo(a) ao website!')
        document.querySelector('body').innerHTML = "LOKO DIMAS!!"

    }else{
        alert('idade invalida')
        window.location = 'https:www.google.com'
    }
    
}

