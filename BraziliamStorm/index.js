let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let menor = notas[0];
let maior = notas[0];
let notafinal = 0;
for (let nota of notas) {
    if (nota > maior) {
        maior = nota;
    }
    if (nota < menor) {
        menor = nota;
    }
    notafinal += nota;
}

notafinal = (notafinal - maior - menor) / (notas.length - 2);

console.log(notafinal);