function testes(){
    //contador = 0
    //while(contador <3){
      //  alert(`QUE DAORA! fiz ${contador+1}vezes`)
    //contador++
 //}
        for(var i = 0;i < 3;i++){
            alert(`QUE MANEIRO!!' FIZ ${i+1}vezes`)
        }

    }

//testes()

function carregarCatalogo(){
  for (let i = 0;i <7;i++)
        document.getElementById('catalogo').innerHTML += ` 
        <div class="livro">
            <img src="livros/download.jpeg" alt="">
            <h4>AS CRONICAS DE NÁRNIA</h4>
            
            <button>Adicionar
                <img src="images/plus.svg" alt="">
            </button>
        </div>`
    }

carregarCatalogo()