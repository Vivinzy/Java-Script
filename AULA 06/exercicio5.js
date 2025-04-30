document.getElementById('converterBtn').addEventListener('click', function() {
    let reais = Number(window.prompt('Informe o valor em reais (R$):'));
    let taxaCambio = 5.81; 
    let dolares = reais / taxaCambio;

    window.alert(`Valor em Reais: R$${reais.toFixed(2)}\nValor em Dólares: $${dolares.toFixed(2)}`);
});
