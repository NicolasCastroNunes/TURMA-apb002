//var clienteNome = 'Nick'
//var cliente Cpf = '99999999'
///var clienteEmail = 'email@email.com'
//var clienteTelephone = '232132323'
//var clienteTipoConta = 'Fisico'
//var clienteSaldo = '0'


//var clienteNome2 = 'Nome'

class Cliente{
    Nome;
    dataNascimento;
    cpf;
    telefone;
    TipoDeConta;
    saldo;
    depositar(valor){
       
            if (valor <= 0){
                console.log('Saldo insuficiente!')
                
            } else{
                this.saldo += valor
                console.log(`O valor de ${valor} foi depositado com sucesso`)
        }
    }
    pix(valor){
        if (this.saldo <= valor){
            console.log('Saldo insuficiente!')
            
        }else{
         console.log(`Pix de valor ${valor} foi efetuado com sucesso!
        
        `)}
    }
   
}

var cliente1 = new Cliente
cliente1.Nome = 'leo'
cliente1.dataNascimento = '01/98/2102'
cliente1.cpf = 1223-12312
cliente1.saldo = 0

cliente1.pix(100)

console.log(cliente1)