let notasAlunos = [7.5, 8.0, 6.5, 9.0, 7.2, 8.5, 6.8, 9.5, 7.0, 8.2]
let totalNotas = 0

for(let i = 0; i < notasAlunos.length; i ++) {
    totalNotas += notasAlunos[i]
}

let media = totalNotas / notasAlunos.length
console.log("Media das notas: " + media.toFixed(2))

let notaMaisAlta = notasAlunos[0]
let notaMaisBaixa = notasAlunos[0]

for(let i = 1; i < notasAlunos.length; i ++) {
    if(notasAlunos[i] > notaMaisAlta) {
        notaMaisAlta = notasAlunos[i]
    } 
    if(notasAlunos[i] < notaMaisBaixa) {
        notaMaisBaixa = notasAlunos[i]
    }
}
console.log("Nota mais alta: " + notaMaisAlta)
console.log("Nota mais baixa: " + notaMaisBaixa)

let AcimaMedia = 0
for(let i = 0; i < notasAlunos.length; i ++) {
    if(notasAlunos[i] > media) {
        AcimaMedia++
    }
}
console.log("Notas acima da média: " + AcimaMedia)

notasAlunos.push(8.5)
console.log("Lista atualizada com a nova nota: " + notasAlunos.join(", "))

let Reprovadas = 0
for(let i = 0; i < notasAlunos.length; i ++) {
    if(notasAlunos[i] < 8.0) {
        Reprovadas++
    }
}
console.log("Notas Reprovadas: " + Reprovadas)