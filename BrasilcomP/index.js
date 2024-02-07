

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    let resposta = [];
    for (palavra of palavras) {
        if (primeiraLetra.toUpperCase() === palavra[0].toUpperCase() && segundaLetra.toUpperCase() === palavra[1].toUpperCase()) {
            resposta.push(palavra);
            console.log(palavra);
        }
    }
    if (resposta.length == 0) {
        console.log("NENHUMA")
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});