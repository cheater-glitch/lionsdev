let resposta
let gostadecafe

console.log('Vocẽ gosta de café?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == "sim") {
        gostadecafe = true
    } else {
        gostadecafe = false
    }
    if(gostadecafe) {
        console.log("Eu amo café tambem.")
    } else {
        console.log("Que pena, eu amo café.")
    }
}
    