

function solucao(letra, palavras) {
    let erro = 0;
    for (let palavra of palavras) {
        if (letra.toUpperCase() !== palavra[0].toUpperCase()) {
            erro++;
        }
    }
    console.log(erro);
}

function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
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