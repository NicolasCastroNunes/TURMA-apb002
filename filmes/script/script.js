function carregarCatalogo() {
    var filmes = [
        ['../image/bat.png', 'O Batman'], 
        ['../image/cap 1.png','Capitão América'],
        ['../image/sup1.png', 'Superman e Lois'],
        ['../image/aqua.jpeg', 'Aquaman 1'],
        ['../image/justice.jpeg', 'Liga da Justiça'],
        ['../image/wall e.jpeg', 'Wall E'],
        ['../image/2.jpeg', 'Aranhaverso 2'],
        ['../image/sonic2.jpeg', 'Sonic 2'],
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