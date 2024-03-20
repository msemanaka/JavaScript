const leia = require('readline-sync')

let nota1, nota2, nota3, nota4, media;

nota1 = leia.questionFloat('Digite a primeira nota: ', {limitMessage: 'Digite um número float: '});
nota2 = leia.questionFloat('Digite a segunda nota: ', {limitMessage: 'Digite um número float: '});
nota3 = leia.questionFloat('Digite a terceira nota: ', {limitMessage: 'Digite um número float: '});
nota4 = leia.questionFloat('Digite a quarta nota: ', { limitMessage: 'Digite um número float: ' });

media = (nota1 + nota2 + nota3 + nota4) / 4

console.log('A média final é: ', media.toFixed(1))