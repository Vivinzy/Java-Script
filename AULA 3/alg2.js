// --- Exerccicos de fixação ---
// checar idade com habilitação para dirigir
function dirigir(idade, habilitação) {
    return idade >= 18 && habilitação;
}

console.log(dirigir(17, true)); //
console.log(dirigir(60, true)); //

// --- Exercicios de fixação ---
let a = true;
let b = true;

console.log(a ||b );b //
console.log(b || false); //

// --- Exercicios de fixação ---
function fimdesemana(dia) {
    return dia === "sabado" || dia === "domingo";
}

console.log(fimdesemana("sabado")); //
console.log(fimdesemana("domingo")); //

// --- Exercicios de fixação ---
function naoAdulto(idade) {
    return ! (idade >= 18);
}

console.log(naoAdulto(20)); //
console.log(naoAdulto(16)); //