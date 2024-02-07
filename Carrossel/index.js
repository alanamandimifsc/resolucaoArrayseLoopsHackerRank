

function solucao(sequencia) {

    pos = 0;
    for (let mov of sequencia) {
        if (pos == 0 && mov === '<') {
            pos = 6;
        } else if (mov === '>' && pos == 6) {
            pos = 0
        } else if (mov === '>') {
            pos++;
        } else if (mov === '<') {
            pos--;

        }
    }

    console.log(pos);

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
