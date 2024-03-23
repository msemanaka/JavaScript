const leia = require('readline-sync');

let numero, soma = 0;

console.log('\nInforme numeros inteiros positivos ou negativos, somente os positivos serão somados. Para "SAIR", digite 0.')

do {
    numero = leia.questionInt('\nInforme um numero: ');

    if (numero > 0) {
        soma = soma + numero; // ou (soma += numero)
    }
} while (numero !== 0)

console.log(`A soma dos numeros positivos é: ${soma}`);