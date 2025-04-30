document.getElementById('numBtn').addEventListener('click', function() {
    let numero = Number(window.prompt('Informe um número:'));
    let antecessor = numero - 1;
    let sucessor = numero + 1;
    window.alert(`Número informado: ${numero}\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`);
});