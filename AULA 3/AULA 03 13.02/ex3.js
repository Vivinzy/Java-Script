// condicionais com if else e else if

let nota = 79;
if (nota >= 80) {
    console.log('Parabéns, voce foi aprovado(a)');
} else if (nota < 80 && nota >= 60) {
    console.log('Voce está na nossa lista de espera');
} else {
    console.log('Voce foi reprovado(a) :( ');
}

// notas

let nota1 = 70;
if (nota1 >=90) {
    console.log("excelente");
}
else if (nota1 >=80) {
    console.log("bom");
}
else {
    console.log('Voce precisa estudar')

}

let nota2 = 70;
if (nota2 >=50) {
    console.log("excelente");
}
else if (nota2 >=90) {
    console.log("bom");
}
else {
    console.log('regular')
}

let nota3 = 90
if (nota3 >=10) {
    console.log('Parabens');
}
else if (nota3 >=50) {
    console.log('bom');
} else {
    console.log('ruim')
}

// hora do dia
let hora = 10;
if (hora <7) {
    console.log(" Muito bom dia");
}
else if (hora >=12) {
    console.log('boa tarde');
} else {
    console.log("boa noite")
}

// dia da semana
let dia = 'sexta';
if (dia === 'domingo') {
    console.log('vou para praia');
} else if (dia === 'segunda') {
    console.log('irei trabalhar');
}
else if (dia === 'terça') {
    console.log('irei pro curso');
}
else if (dia === 'quarta') {
    console.log('vou pra casa do meu namorado');
}
else if (dia === 'quinta') {
    console.log('vou sair com meus amigos');
}
else if (dia === 'sexta') {
    console.log('vou arrumar minha mala');
}
else if (dia === 'sabado') {
    console.log('vou descansar');
}
