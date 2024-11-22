function carregarCatalogo(){
    var livros = [
        ['image/pets.jpeg','Pets - O filme']
    ]


livros.forEach(cadaLivro => { 
    document.getElementById('catalogo').innerHTML += ` 
    <div class="livro">
        <img src="${cadaLivro[0]}" alt="">
        <h4>${cadaLivro[1]}</h4>
        
        <button>Comprar
            <img src="images/plus.svg" alt="">
        </button>
    </div>`;
});
}

carregarCatalogo();