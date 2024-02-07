

function solucao(precos) {
    let total = 0;
    let array = precos.map(Number)
    for (let valor of array) {
        total += valor;
    }
    if (precos.length >= 5) {
        let aux = array[0];
        for (let valor of array) {
            if (aux > valor) {
                aux = valor;
            }

        }

        console.log(total - aux);


    } else
        console.log(total);



}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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