const leia = require('readline-sync')

let n1, n2, n3, n4, diferenca;

// aqui vc pediu um float. O limitMessage é caso a pessoa digite outra coisa que não seja um numero, e ai voce escolheu a mensagem "digite "
n1 = leia.questionFloat('Digite o numero 1: ', { limitMessage: 'Digite um número float: ' });
n2 = leia.questionFloat('Digite o número 2: ', { limitMessage: 'Digite um número float: ' });
n3 = leia.questionFloat('Digite o número 3: ', { limitMessage: 'Digite um número float: ' });
n4 = leia.questionFloat('Digite o número 4: ', { limitMessage: 'Digite um número float: ' });

diferenca = (n1 * n2) - (n3 * n4);

console.log('A diferença é de: ', diferenca.toFixed(1))