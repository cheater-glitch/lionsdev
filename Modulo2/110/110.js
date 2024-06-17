let vetorInicial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosImpares = []

for (let i = 0; i < vetorInicial.length; i ++) {
    let numero = vetorInicial[i]
    if (numero % 2 !== 0) {
        numerosImpares.push(numero)
    }
}

console.log("Números ímpares: " + numerosImpares.join(", "))