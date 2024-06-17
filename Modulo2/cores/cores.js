let coresFavoritas = ["Preto", "Azul", "Verde"]
let coresEspeciais = []
let coresDoUsuario

console.log("Qual é a sua cor favorita?")
process.stdin.once('data', function(data) {
    coresDoUsuario = data.toString().trim()
    processamento(coresDoUsuario)
    process.exit()
})

function processamento(coresDoUsuario) {
    if (coresFavoritas.includes(coresDoUsuario.toLowerCase())) {
        console.log("A sua cor favorita é uma das favoritas da turma!")
    } else {
        console.log("a sua cor é diferente, vamos adicionar a lista!")
        coresEspeciais.push(coresDoUsuario)
    }
    console.log("Cores favoritas: ", coresFavoritas)
    console.log("Cores especiais: ", coresEspeciais)
    console.log("Quantidade de cores: ", coresFavoritas.length)
}