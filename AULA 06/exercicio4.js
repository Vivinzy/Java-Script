document.getElementById('calcularTrocoBtn').addEventListener('click', function() {
    let produto = window.prompt('Qual produto você deseja comprar?');
    let valorProduto = Number(window.prompt(`Qual é o valor do(a) ${produto}?`));
    let valorPago = Number(window.prompt('Quanto você pagou pelo produto?'));
    let troco = valorPago - valorProduto;

    window.alert(`Produto: ${produto}\nValor do Produto: R$${valorProduto.toFixed(2)}\nValor Pago: R$${valorPago.toFixed(2)}\nTroco: R$${troco.toFixed(2)}`);
});