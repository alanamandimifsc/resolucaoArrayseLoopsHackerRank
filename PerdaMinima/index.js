

function solucao(precos) {

    let valorDif = [];
    for (let i = 0; i < precos.length; i++) {
        let valorPago = precos[i];
        for (let j = i + 1; j < precos.length; j++) {
            valorDif.push(valorPago - precos[j]);
        }


    }
    let maior = 0;
    for (let valor of valorDif) {
        if (valor > maior) {
            maior = valor;
        }
    }

    for (let valor of valorDif) {
        if (maior > valor && valor > 0) {
            maior = valor;
        }
    }

    console.log(maior);
}

function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
    solucao(precos);
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