let prova1
let prova2

console.log("Digite a primeira nota: ")
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log("Digite a segunda nota: ")

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})

function processamento(prova1, prova2) {
    let notas = []
    notas.push(prova1)
    notas.push(prova2)
    let media = (notas[0] + notas[1]) /2
 
    console.log("A media das notas é: " + media)
}