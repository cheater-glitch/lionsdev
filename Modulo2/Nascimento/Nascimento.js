let nome
let idade
const ano = 2024

console.log("Como é seu nome?")

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Qual é a sua idade?")

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    media = ano - idade
    console.log(`Olá, ${nome}, sua idade é ${idade} e seu ano é ${media} `)
}
