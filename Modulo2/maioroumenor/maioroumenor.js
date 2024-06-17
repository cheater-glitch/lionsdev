let nome
let idade

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
    if (idade >= 18) {
        console.log(nome + ", você é maior de idade.")
    } else {
        let anosrestantes = 18 - idade
        if (anosrestantes === 1) {
            console.log(nome + ", você é menor de idade. Você será maior de idade em 1 ano.")
        } else {
        console.log(nome + ", você é menor de idade. Você será maior de idade em " + anosrestantes + " anos.")
    }}
}
