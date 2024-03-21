const leia = require('readline-sync');

let nome, idade, doacao;

nome = leia.question('Digite o nome do doador: ');
idade = leia.questionInt('Digite a idade do doador: ');

if (idade < 18) {
    console.log(nome, 'não está apto(a) para doar sangue!');
} else {
    doacao = leia.question('Primeira doacao de sangue? ');
    if (idade > 69 || (idade > 60 && doacao === "sim")) {
        console.log(nome, 'não está apto(a) para doar sangue!');
    } else {
        console.log(nome, 'está apto(a) para doar sangue!');
    }
}