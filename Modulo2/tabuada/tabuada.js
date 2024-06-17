let numero

console.log("Qual tabuada você deseja saber?")
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    for (let i = 0; i <= 10; i += 1) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
    process.exit()
})