let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImapares = 0

for (let numero = 0; numero <= 999; numero++) {
    if (numero % 2 == 0) {
        somaPares += numero
        totalPares++
    } else {
        somaImpares += numero
        totalImpares++
    }
}

mediaPares = somaPares / totalPares
mediaImapares = somaImpares / totalImpares

console.log(`Soma dos números pares: ${somaPares}`)
console.log(`Soma dos números ímpares: ${somaImpares}`)
console.log(`Total de números pares: ${totalPares}`)
console.log(`Total de números ímpares: ${totalImpares}`)
console.log(`Média dos números pares: ${mediaPares}`)
console.log(`Média dos números ímpares: ${mediaImapares}`)
if (totalPares > totalImpares) {
    console.log("O total de números pares é maior que o total de números ímpares") 
} else if (totalImpares > totalPares) {
    console.log("O total de números ímpares é maior que o total de números pares")
} else {
    console.log("O total de números pares é igual o total de números ímpares")
}