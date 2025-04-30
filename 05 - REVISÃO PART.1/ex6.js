let temperatura = parseFloat(prompt("Digite a temperatura:"));

if (temperatura >= 30) {
    console.log("Está muito quente.");
    // prompt("Temperatura:");
} else if (temperatura >= 20) {
    console.log("Agradavel.");
} else if (temperatura >= 10) {
    console.log("Frio.");
} else {
    console.log("Muito frio.");
    prompt("Temperatura:");
}
