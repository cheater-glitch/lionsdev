let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let senha = ''
let comprimentoSenha

console.log("Qual o comprimento da senha desejada?")
process.stdin.once('data', function(data) {
    comprimentoSenha = parseInt(data.toString().trim())
    for (let i = 0; i < comprimentoSenha; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        senha += caracteres.charAt(indiceAleatorio)
    }
    processamento(comprimentoSenha)
    process.exit()
})

function processamento(comprimentoSenha) {
    console.log(`Senha gerada: ${senha}`)
}