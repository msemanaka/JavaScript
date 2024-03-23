const leia = require("readline-sync");

let vetorInteiros = new Array(10);
let soma = 0, media = 0;

console.log('Digite 10 numeros inteiros: ');
for (let indice = 0; indice < vetorInteiros.length; indice++) {
    vetorInteiros[indice] = leia.questionInt(`Digite o numero ${indice + 1}: `);
}

console.log('\nElementos impares: ')
for (indice = 0; indice < vetorInteiros.length; indice++) {
    if (vetorInteiros[indice] % 2 !== 0) {
        console.log(vetorInteiros[indice]);
    }
}

console.log('\nElementos pares: ')
for (indice = 0; indice < vetorInteiros.length; indice++) {
    if (vetorInteiros[indice] % 2 === 0) {
        console.log(vetorInteiros[indice]);
    }
}


for (indice = 0; indice < vetorInteiros.length; indice++) {
    soma += vetorInteiros[indice]
}
console.log(`\nSoma de todos os numeros informados: ${soma}`)

for (indice = 0; indice < vetorInteiros.length; indice++) {
    media = soma / vetorInteiros.length
}
console.log(`\nMedia: ${(media).toFixed(2)}`)