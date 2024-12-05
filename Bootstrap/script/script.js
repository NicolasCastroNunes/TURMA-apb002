lista_categorias = []

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('SUCOS','images/sucos.avif','Os melhores sucos você encontra aqui, Suco de morango, Suco de uva, Suco de Detox, e muito mais','Suco feito por @'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/refri.avif','Refrigerante bom pacas','Refri feito por @maquinas'))
lista_categorias.push(new Categoria('DRINK','images/shesh.avif','Drinks saúdaveis e Refrescantes','Drink feito por @'))
lista_categorias.push(new Categoria('SORVETES','images/sorvete.avif','Sorvetes ótimos de morango com baunilha e entre outros..','Sorvetes feito por @'))
lista_categorias.push(new Categoria('VINHOS','images/vinho.avif','Vinhos de qualidade acima da média e muito mais','Vinhos feito por @'))
lista_categorias.push(new Categoria('SUCOS REFRESH','images/liquido.jpg','Os melhores sucos você encontra aqui, Suco de morango, Suco de uva, Suco de Detox, e muito mais','Refreshs feito por @'))

lista_categorias.forEach(categoria => {
  document.querySelector('#categoriaItems').innerHTML += `
     <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
  `
});