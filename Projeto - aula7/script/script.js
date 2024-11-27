function carregarCatalogo() {
    var jogos = [
        ['../images/cuphead.png', 'CUPHEAD'], 
        ['../images/undertale.png','UNDERTALE'],
        ['../images/hollow night.jpeg', 'HOLLOW KNIGHT'],
        ['../images/gta 5.jpeg', 'GTA 5'],
        ['../images/sup - smashe.jpeg','SUPER SMASHES ULTIMATE'],
        ['../images/roblox.jpeg','ROBLOX'],
        ['../images/subway surf.jpeg','SUBWAY SURFERS'],
        ['../images/cod.jpeg','COD BLACK OPS 6'],
        ['../images/god of war.jpeg','God of War - Ragnarok'],
        ['../images/fort.jpeg', 'FORTNITE'],
        ['../images/battle.jpeg','BATTLEFIELD'],
        ['../images/the last.jpeg','The Last OF US']
    ];

    
    jogos.forEach(cadaJogo => { 
        document.getElementById('catalogo').innerHTML += ` 
        <div class="jogo">
            <img src="${cadaJogo[0]}" alt="">
            <h4>${cadaJogo[1]}</h4>
            
            <div class="container">
            <button>Adicionar
            </button>
            </div>
        </div>
        `;
    });
}

carregarCatalogo();