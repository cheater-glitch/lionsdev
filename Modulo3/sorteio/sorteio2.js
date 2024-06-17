const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeroSorteado = Math.floor(Math.random() * 100) + 1
const limiteRodadas = 10
let rodadas = 0

function solicitarPalpite() {
    rl.question('Tente adivinhar o número sorteado (entre 1 e 100): ', (palpite) => {
        const palpiteNumero = parseInt(palpite)
        if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 100)
        {
            console.log('Por favor, digite um número válido entre 1 e 100.')
            solicitarPalpite()
        } else {
            rodadas++
            if (rodadas >= limiteRodadas) {
                console.log(`Você atingiu o limite maximo de ${limiteRodadas}. O número sorteado era ${numeroSorteado}`)
                rl.close()
            } else if (palpiteNumero < numeroSorteado) {
                console.log('Muito baixo! Tente novamente.')
                solicitarPalpite()
            } else if (palpiteNumero > numeroSorteado) {
                console.log('Muito alto! Tente novamente.')
                solicitarPalpite()
            } else {
                console.log('Parabéns! Você acertou o número.')
                rl.close()
            }
        }
    })
}

console.log('Bem-vindo ao jodo de adivinhação! Tente adivinhar o número entre 1 e 100.')
solicitarPalpite()