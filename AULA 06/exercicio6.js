function comprar() {
    let categoria = window.prompt('Você escolheu a opção de compra. Agora diga qual categoria você deseja: Filmes, Séries ou Novelas.');
    let nome = window.prompt(`Você escolheu comprar ${categoria}. Informe o nome do ${categoria.toLowerCase()}:`);
    window.alert(`Assista Agora: ${categoria}: ${nome}.`);
}

function alugar() {
    let categoria = window.prompt('Você escolheu a opção de alugar. Agora diga qual categoria você deseja: Filmes, Séries ou Novelas.');
    let nome = window.prompt(`Você escolheu alugar ${categoria}. Informe o nome do ${categoria.toLowerCase()}:`);
    window.alert(`Assista Agora ${categoria}: ${nome}.`);
}

function assinar() {
    let categoria = window.prompt('Você escolheu a opção de assinatura. Escolha qual plataforma de streaming deseja assinar');
    let nome = window.prompt(`Você escolheu assinar ${categoria}. Informe o nome do Filme, Serie ou Novela ${categoria.toLowerCase()}:`);
    window.alert(`Parabens, plano assinado ${categoria}: ${nome}.`);
}