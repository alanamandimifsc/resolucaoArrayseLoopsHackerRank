

function solucao(stringCorrompida) {

    let dadoPurificado = '';
    for (let caractere of stringCorrompida) {
        if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' || caractere === '.') {

        } else {
            dadoPurificado = dadoPurificado + caractere;
        }
    }
    console.log(dadoPurificado);
}

function processData(input) {
    solucao(input);
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