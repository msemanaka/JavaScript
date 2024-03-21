const leia = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat('Digite seu salario: ', {limitMessage: 'Digite um número float: '});

abono = leia.questionFloat('Digite o abono e os centavos: ', {limitMessage: 'Digite um número float: '})

novoSalario = salario + abono

console.log("O seu novo salário é: ", novoSalario.toFixed(2))

