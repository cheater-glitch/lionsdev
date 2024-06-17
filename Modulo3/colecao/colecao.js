const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let acervo = []

function exibirMenu() {
  console.log(`
    Menu:
    1. Cadastrar filme
    2. Cadastrar jogo
    3. Cadastrar arte
    4. Listar filmes, jogos e artes
    5. Editar filme, jogo ou arte
    6. Remover filme, jogo ou arte
    7. Sair
  `)

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        cadastrarFilme()
        break
      case '2':
        cadastrarJogo()
        break
      case '3':
        cadastrarArte()
        break
      case '4':
        listarElementos()
        break
      case '5':
        editarElemento()
        break
      case '6':
        removerElemento()
        break
      case '7':
        rl.close()
        break
      default:
        console.log('Opção inválida, tente novamente.')
        exibirMenu()
        break
    }
  })
}

function cadastrarFilme() {
  rl.question('Digite o nome do filme: ', nome => {
    rl.question('Digite a descrição do filme: ', descricao => {
      acervo.push({ nome: nome, tipo: 'filme', descricao: descricao })
      console.log('Filme cadastrado com sucesso!')
      exibirMenu()
    })
  })
}

function cadastrarJogo() {
  rl.question('Digite o nome do jogo: ', nome => {
    rl.question('Digite a descrição do jogo: ', descricao => {
      acervo.push({ nome: nome, tipo: 'jogo', descricao: descricao })
      console.log('Jogo cadastrado com sucesso!')
      exibirMenu()
    })
  })
}

function cadastrarArte() {
  rl.question('Digite o nome da arte: ', nome => {
    rl.question('Digite a descrição da arte: ', descricao => {
      acervo.push({ nome: nome, tipo: 'arte', descricao: descricao })
      console.log('Arte cadastrada com sucesso!')
      exibirMenu()
    })
  })
}

function listarElementos() {
  console.log('Acervo:')
  acervo.forEach(elemento => {
    console.log(`Nome: ${elemento.nome} Tipo: ${elemento.tipo} Descrição: ${elemento.descricao}`)
  })
  exibirMenu()
}

function editarElemento() {
  rl.question('Digite o nome do elemento que deseja editar (filme, jogo ou arte): ', nome => {
    const index = acervo.findIndex(elemento => elemento.nome === nome)
    if (index !== -1) {
      rl.question('Digite o novo nome do elemento (filme, jogo ou arte): ', novoNome => {
        acervo[index].nome = novoNome
        console.log('Elemento editado com sucesso!')
        exibirMenu()
      })
    } else {
      console.log('Elemento não encontrado.')
      exibirMenu()
    }
  })
}

function removerElemento() {
  rl.question('Digite o nome do elemento que deseja remover (filme, jogo ou arte): ', nome => {
    const index = acervo.findIndex(elemento => elemento.nome === nome)
    if (index !== -1) {
      acervo.splice(index, 1)
      console.log('Elemento removido com sucesso!')
      exibirMenu()
    } else {
      console.log('Elemento não encontrado.')
      exibirMenu()
    }
  })
}

exibirMenu()