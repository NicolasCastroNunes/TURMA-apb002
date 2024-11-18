var numero = Number(prompt('Digite um número de 1 a 7:'))

if (numero >= 1 && numero <= 7) {

    var diaSemana;

    switch (numero) {
      case 1:
        diaSemana = "Segunda-feira";
        break;
      case 2:
        diaSemana = "Terça-feira";
        break;
      case 3:
        diaSemana = "Quarta-feira";
        break;
      case 4:
        diaSemana = "Quinta-feira";
        break;
      case 5:
        diaSemana = "Sexta-feira";
        break;
      case 6:
        diaSemana = "Sábado";
        break;
      case 7:
        diaSemana = "Domingo";
        break;
    }
    
    
    alert("O dia correspondente ao número " + numero + " é " + diaSemana + ".")