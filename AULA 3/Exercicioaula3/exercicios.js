// Operador && (E)
let a = true;
let b = false;

console.log(a && b); // falso
console.log(a && true); //verdadeiro
console.log(b && false); // falso
console.log(a && (b || true)); // verdadeiro

// Operador || (OU)
let x = false;
let y = true;

console.log(x || y); // verdadeiro
console.log(x || false); // falso
console.log(y || false); // verdadeiro
console.log(x || (y && false)); // falso

// Operador ! (NOT)
let z = true;

console.log(!z); // falso
console.log(!false); // verdadeiro
console.log(!(z && false)); // verdadeiro
console.log(!z || false); // falso

// Combinação de operadores
let v = true;
let n = false;
let c = true;

console.log(v && n || c); // verdadeiro
console.log((v || n) && !c); // falso
console.log(!(v && n) || (c && !n)); // verdadeiro
console.log(v && (n || c) && !n); // veradeiro

// Operações numericos
let k = 10;
let j = 20;
let l = 15;

console.log(k > j); // falso
console.log(j < k); // falso
console.log(k == j); // falso

// --- Desafios ---

// Algoritmo para checar se um número é par
function par(numero) {
    return numero % 22 === 0;
}
 console.log(par(22)); // verdadeiro
 console.log(par(31)); // falso

// Algoritmo para vacinação para COVID-19 acima de 60 anos
function vacinacao(idade) {
    return idade >= 63;
}
console.log(vacinacao(63)); // verdadeiro
console.log(vacinacao(12)); // falso

// Algoritmo para checar se um veículo é elétrico ou flex
function veiculo(tipo) {
    return tipo === "eletrico" || tipo === "flex";
}
console.log(veiculo("eletrico")); // verdadeiro 
console.log(veiculo("flex")); // verdadeiro
console.log(veiculo("gasolina")); // falso