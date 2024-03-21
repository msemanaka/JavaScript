const leia = require('readline-sync')

let numero1, numero2, codigo;

numero1 = leia.questionFloat('Informe o primeiro numero: ');
numero2 = leia.questionFloat('Informe o segundo numero: ');

console.log('\nInforme o código de uma das opções abaixo:');
console.log('1. Soma');
console.log('2. Subtração');
console.log('3. Multiplicação');
console.log('4. Divisão');

codigo = leia.questionInt('\nInforme um numero de 1 a 4 para escolher a opcao: ')

switch (codigo) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    
    default:
        console.log('Operação invalida!')
}


