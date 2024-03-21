const leia = require('readline-sync')

let nome, cargo, salario;

nome = leia.question('\nNome do colaborador: ')

console.log('\nQual o cargo do colaborador? ')

console.log('1. Gerente');
console.log('2. Vendedor');
console.log('3. Supervisor');
console.log('4. Motorista');
console.log('5. Estoquista');
console.log('6. Técnico de TI');

cargo = leia.questionInt('\nDigite o codigo de 1 ate 6 do cargo: ')

if (cargo < 0 || cargo > 6) {
    console.log('Código inválido!');
} else {
    salario = leia.questionFloat('\nSalario do colaborador: ');

    switch (cargo) {
        case 1:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Gerente')
            console.log(`Salario com reajuste: R$${(salario * 1.1).toFixed(2)}`)
            break;
        case 2:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Vendedor')
            console.log(`Salario com reajuste: R$${(salario * 1.07).toFixed(2)}`)
            break;
        case 3:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Supervisor')
            console.log(`Salario com reajuste: R$${(salario * 1.09).toFixed(2)}`)
            break;
        case 4:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Motorista')
            console.log(`Salario com reajuste: R$${(salario * 1.06).toFixed(2)}`)
            break;
        case 5:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Estoquista')
            console.log(`Salario com reajuste: R$${(salario * 1.05).toFixed(2)}`)
            break;
        case 6:
            console.log(`\nNome do colaborador: ${nome}.`)
            console.log('Cargo: Tecnico de TI')
            console.log(`Salario com reajuste: R$${(salario * 1.08).toFixed(2)}`)
            break;
    }
}

