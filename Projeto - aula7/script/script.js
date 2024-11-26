function carregarCatalogo() {
    var jogos = [
        ['../images/cuphead.png', 'CUPHEAD'], 
        ['../images/red dead.jpeg', 'Red Dead Redemption 2'],
        ['../images/hollow night.jpeg', 'Hollow Night'],
        ['../images/gta 5.jpeg', 'GTA 5']
    ];

    
    jogos.forEach(cadaJogo => { 
        document.getElementById('catalogo').innerHTML += ` 
        <div class="jogo">
            <img src="${cadaJogo[0]}" alt="">
            <h4>${cadaJogo[1]}</h4>
            
            <button>Adicionar
            </button>
        </div>`;
    });
}

carregarCatalogo();