function testes() {
    for (var i = 0; i < 3; i++) {
        alert(`QUE MANEIRO!! FIZ ${i + 1} VEZES`); 
    }
}

//testes();

function carregarCatalogo() {
    var livros = [
        ['livros/download.jpeg', 'As crônicas de Nárnia- Movie'],
        ['livros/narnia3.jpeg', 'As Crônicas de Nárnia - O sobrinho do Mago'],
        ['livros/narni2.jpeg', 'As Crônicas de Nárnia - Book'],
        ['livros/o pequeno prince.jpeg ', 'O Pequeno Principe'],
        ['livros/a cabana.webp', 'A Cabana'],
        ['livros/vento.webp','O menino que descobriu o Vento'],
        ['livros/silencio.webp', 'O poder do silêncio'],
        
    ];

    
    livros.forEach(cadaLivro => { 
        document.getElementById('catalogo').innerHTML += ` 
        <div class="livro">
            <img src="${cadaLivro[0]}" alt="">
            <h4>${cadaLivro[1]}</h4>
            
            <button>Adicionar
                <img src="images/plus.svg" alt="">
            </button>
        </div>`;
    });
}

carregarCatalogo();
