const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})

const numeroSorteado = Math.floor(Math.random() * 100) + 1

function solicitarPalpite() {
    rl.question('Tente adivinhar o número sorteado (entre 1 e 100): ', (palpite) => {
        const palpiteNumero = parseInt(palpite)
        if (palpiteNumero < numeroSorteado) {
            console.log('Muito baixo! Tente novamente.')
            solicitarPalpite()
        } else if (palpiteNumero > numeroSorteado) {
            console.log('Muito alto! Tente novamente.')
            solicitarPalpite()
        } else {
            console.log('Parabéns! Você acertou o número.')
            rl.close()
        }
    })
}

solicitarPalpite()