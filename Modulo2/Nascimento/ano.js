let nome
let idade
let jaFezAniversario
const anoAtual = 2024

console.log("Como é seu nome?")

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Qual é a sua idade?")

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log("Você já fez aniversário este ano?")

        process.stdin.once('data', function(data) {
            jaFezAniversario = data.toString().trim().toLowerCase()
            processamento(nome, idade, jaFezAniversario)
            process.exit()
        })
    })
})

function processamento(nome, idade, jaFezAniversario) {
    let anoNascimento = anoAtual - idade
    if (jaFezAniversario === 'não') {
        anoNascimento--
    }
    console.log(`Olá, ${nome}, sua idade é ${idade} e você nasceu em ${anoNascimento}`)
}