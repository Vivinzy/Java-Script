// Repetição Ola mundo

let i = 0;
while (i < 11) {
    console.log('Olá mundo');
    i++;
}

// Tabuada do 9

let j = 1;
while (j < 11) {
    console.log(`9 x ${j} = ${9 * j}`);
    j++;
}

// Soma do números impares de 1 a 100

let soma = 0;
for (let i = 1; i <= 100; i++)
    if (i % 2 !== 0) {
        soma += i;
    }
console.log(soma);

// contagem regressiva de 10 a 1 e no final mostrar a mensagem "Feliz ano novo"

let k = 10;
while (k > 0) {
    console.log(k);
    k--;
}
console.log('Feliz ano novo!');

// Situação de Aprendizagem – Atividade Individual
// Verificação de categoria de idade 

let idade = 10;
while (idade < 21) {
    if (idade < 18) {
        console.log('infantil');
    } else {
        console.log('juvenil');
    }
    idade++;
}
console.log('adulto');

//Verificação de Nota com Mensagem 

for (let i = 0; i < 10; i++) {
    let nota = Math.random() * 10;
    if (nota < 4) {
        console.log('Reprovado');
    } else if (nota < 6) {
        console.log('Recuperação');
    } else {
        console.log('Aprovado');
    }
}

//Verificação de Dia da Semana 

let dia = 1;
do {
    if (dia === 6 || dia === 7) {
        console.log('Final de semana');
    } else {
        console.log('Dia de semana');
    }
    dia++;
} while (dia < 8);


//Verificação de Horário do Dia

let hora = 23;
if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

//Verificação de Peso Ideal

let altura = 1.70;
let peso = 70;
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc < 25) {
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Sobrepeso');
} else if (imc < 35) {
    console.log('Obesidade grau 1');
}

//Verificação de Número Primo

let numero = 8;
let primo = true;   
for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}
if (primo) {
    console.log('Primo');
} else {
    console.log('Não primo');
}

//Verificação de Ano Bissexto

let ano = 2024; 
if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    console.log('Bissexto');
} else {    
    console.log('Não bissexto');
}   

//atividade 8 está repetida (atividade 2)//

//Verificação de Temperatura com Mensagem

let temperatura = 19;
if (temperatura < 15) {
    console.log('Frio');
} else if (temperatura < 22) {
    console.log('Agradável');
} else {
    console.log('Quente');
}  

//Verificação de Desempenho de Vendas

let vendas = 10000;
if (vendas < 2000) {
    console.log('Desempenho ruim');
} else if (vendas < 5000) {
    console.log('Desempenho regular');
} else if (vendas < 10000) {
    console.log('Desempenho bom');
} else {
    console.log('Desempenho excelente');
}