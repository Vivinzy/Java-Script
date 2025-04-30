document.getElementById('infoBtn').addEventListener('click', function() {
    let nome = window.prompt('Qual é o seu nome?');
    let idade = window.prompt('Qual é a sua idade?');
    window.alert(`Nome: ${nome}\nIdade: ${idade}`);
});