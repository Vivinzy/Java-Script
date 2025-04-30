const numeros = require ("readline");
const num = numeros.createInterface({
    input: process.stdin,           
    output: process.stdout,
});

num.question("digite o primeiro numero: ", (num1) => {
    num.question("digite o segundo número: ", (num2) => {
        num.question("digite o terceiro número: ", (num3) => {      
            num.question("digite o quarto número: ", (num4) => {
                let soma = Number(num1) + Number(num2) + Number(num3) + Number(num4);
                console.log(`a soma dos números é: ${soma} `);
                num.close();
            });
        });
    });  
});