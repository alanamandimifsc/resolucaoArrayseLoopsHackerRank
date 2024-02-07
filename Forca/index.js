let palavra = "casa";
let palpite = "a";
let qtdAcertos = 0;
for (let letra of palavra) {
    if (letra === palpite) {
        qtdAcertos++;
    }
}

console.log(qtdAcertos);