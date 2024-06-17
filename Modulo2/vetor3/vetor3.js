let vetorInicial = [27, 10, 3, 0, 20, 5, 6, 3]

vetorInicial.push(17)

let numerosPares = []
let numerosImpares = []

for (let i = 0; i < vetorInicial.length; i ++) {
    let numero = vetorInicial[i]
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    } else {
        numerosImpares.push(numero)
    }
}

console.log("Números Pares: " + numerosPares.join(", "))
console.log("Números ímpares: " + numerosImpares.join(", "))