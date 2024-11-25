class Usuario {
    //id, @, nome. bio, genero
    constructor(id, apelido, email, nome, bio, genero) {
        this.id = id
        this.apelido = apelido
        this.email = email
        this.nome = nome
        this.bio = bio
        this.genero = genero
        this.postar = function(pensamento) {
            document.querySelector('#resposta').innerHTML += `
            
            <div class="post">
                <h3>${this.apelido}<h3/>
                <p>${pensamento}</p>
            </div>
            ` 
        }
}}

var user1 = new Usuario(1, 'VRohod', 'Nicolas',  'nicolas@gmail.com', 'CURSANDO TI', 'Masculino')
var user2 = new Usuario(2, 'Nick', 'Nicolas',  'nick@gmail.com', 'CURSANDO TI2', 'Masculino')

function postarFeed(){
    alert('Postado com sucesso!')
    pensamento = document.querySelector('#pensamento').value

    user1.postar(pensamento)
}