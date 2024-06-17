let nota1
let nota2
let media

console.log("Qual a primeira nota?")
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log("Qual a segunda nota?")

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
})

function processamento(nota1, nota2) {
    media = (nota1+nota2) /2
    console.log(media)
}
