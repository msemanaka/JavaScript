const leia = require('readline-sync');

let salarioB, adicionalN, horasExtras, descontos, salarioL;

salarioB = leia.questionFloat('Digite seu Salário Bruto: ', {limitMessage: 'Digite um número float: '});
adicionalN = leia.questionFloat('Digite o Adicional Noturno: ', {limitMessage: 'Digite um número float: '});
horasExtras = leia.questionFloat('Digite as Horas Extras: ', {limitMessage: 'Digite um número float: '});
descontos = leia.questionFloat('Digite os Descontos: ', { limitMessage: 'Digite um número float: ' });

salarioL = salarioB + adicionalN + (horasExtras * 5) - descontos

console.log('Seu salário líquido é: ', salarioL)