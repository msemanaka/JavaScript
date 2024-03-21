const leia = require('readline-sync');

let numA, numB, numC, soma;

numA = leia.questionFloat('Digite o numero A: ');
numB = leia.questionFloat('Digite o numero B: ');
numC = leia.questionFloat('Digite o numero C: ');

soma = numA + numB

if (numA + numB > numC) {
    console.log('\n', numA, " + ", numB, " = ", soma, ">", numC);
    console.log('A soma de A + B é maior do que C.');
} else if (numA + numB < numC) {
    console.log('\n', numA, " + ", numB, " = ", soma, "<", numC);
    console.log('A soma de A + B é menor do que C.');
} else {
    console.log('\n', numA, " + ", numB, " = ", soma, "=", numC);
    console.log('A soma de A + B é igual a C.');
}