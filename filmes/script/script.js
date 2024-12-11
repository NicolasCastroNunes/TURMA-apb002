function carregarCatalogo() {
    var filmes = [
        ['../image/bat.png', 'O BATMAN'], 
        ['../image/cap 1.png','CAPITÃO AMÉRICA'],
        ['../image/sup1.png', 'SUPERMAN e LOIS'],
        ['../image/aqua.jpeg', 'AQUAMAN'],
        ['../image/justice.jpeg', 'LIGA da JUSTIÇA'],
        ['../image/wall e.jpeg', 'WALL E'],
        ['../image/2.jpeg', 'ARANHAVERSO 2'],
        ['../image/sonic2.jpeg', 'SONIC 2'],
    ];

    
    filmes.forEach(cadaFilme => { 
        document.getElementById('catalogo').innerHTML += ` 
        <div class="filmes">
            <img src="${cadaFilme[0]}" alt="">
            <h4>${cadaFilme[1]}</h4>
            
            <div class="container">
            <button>Reservar</button>
            </div>
        </div>
        `;
    });
}

carregarCatalogo();