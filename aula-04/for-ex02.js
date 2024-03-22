const leia = require('readline-sync');

let numero, impar = 0, par = 0;

console.log('CONTADOR DE NUMEROS PARES E IMPARES');

for (contador = 1; contador <= 10; contador++) {
    numero = leia.questionInt('Digite um numero: ');

    if (numero % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log(`\nTotal de numeros pares: ${par}`);
console.log(`Total de numeros impares: ${impar}`);