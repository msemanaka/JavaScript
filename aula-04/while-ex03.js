const leia = require('readline-sync');

let idade, menorQue21 = 0, maiorQue50 = 0, continuar = true;

console.log('Digite a idade das pessoas. Digite uma idade negativa para finalizar o programa.');

while (continuar) {
    idade = leia.questionInt('Digite um numero: ');

    if (idade < 0) {
        continuar = false;
    } else if (idade < 21) {
        menorQue21++;
    } else if (idade > 50) {
        maiorQue50++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menorQue21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiorQue50}`);

console.log('\nPrograma finalizado.');