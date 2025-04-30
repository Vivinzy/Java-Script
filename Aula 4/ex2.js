// imprimir números pares de 1 a 20

for (let i = 2; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// calcular a soma dos números:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);

// calcular o fatorial de um número fornecido pelo usuário:

let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log('O fatorial de ${numero} é ${fatorial}.');

// Iterrar sobre um array:

let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Iterrar sobre um array:
let marcas = ["Channel", "Dior", "Gucci", "Prada", "Louis Vuitton", "Hermes", "Versace", "Fendi"];
for (let i = 0; i < marcas.length; i++) {
    console.log(marcas[i]);
}
