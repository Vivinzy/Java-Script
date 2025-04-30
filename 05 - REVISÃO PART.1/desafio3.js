// Calcular média de notas com base em duas notas, sendo a primeira com peso 6 e a segunda com peso 10 e mais um preso 4 para trabalhos
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let trabalho = parseFloat(prompt("Digite a nota do trabalho:"));

let media = (nota1 * 6 + nota2 * 10 + trabalho * 4) / 20;

alert(`A média é: ${media}`);


