let opcoes = ['Pedra', 'Papel', 'Tesoura']
let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]

console.log("Escolha pedra, papel ou tesoura.")
process.stdin.once('data', (resposta) => {
    let escolhaUsuario = resposta.toString().toLowerCase()
    let resultado = ''
    if(escolhaUsuario === escolhaComputador) {
        resultado = 'Empate'
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você venceu!'
    } else {
        resultado = 'Você perdeu!'
    }

    console.log(`Escolha do Computador: ${escolhaComputador}`)
    console.log(`Sua escolha: ${escolhaUsuario}`)
    console.log(`Resultado: ${resultado}`)
    process.exit()
})