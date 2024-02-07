let disparos = [0, 50, 90, 80, 100, 80, 40]
let qtdDisparos = 0;

for (let tiro of disparos) {
    if (tiro > 70) {
        qtdDisparos++;
    }
}

if (qtdDisparos === 0 || qtdDisparos < 3) {
    console.log("ELIMINADO")
} else {
    console.log(qtdDisparos)
}


