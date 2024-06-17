const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar funcionários
	3. Mostrar maior salário
	4. Editar funcionário
        5. Remover funcionário
        6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
			case '3':
				mostrarMaiorSalario()
				break
			case '4':
                editarFuncionario()
                break
            case '5':
                removerFuncionario()
                break
            case '6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', nome => {
      rl.question('Digite o cargo do funcionário: ', cargo => {
        rl.question('Digite o salário do funcionário: ', salario => {
          funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
          console.log('Funcionário cadastrado com sucesso!')
          exibirMenu()
        })
      })
    })
  }
  
  function listarFuncionarios() {
    console.log('Lista de Funcionários:')
    funcionarios.forEach(funcionario => {
        console.log(`Nome: ${funcionario.nome} Cargo: ${funcionario.cargo} Salário: ${funcionario.salario}`)
    })
    if(funcionarios.length === 0) {
        console.log('Nenhum funcionário cadastrado.')
    }
    exibirMenu()
  }
  
  function mostrarMaiorSalario() {
    let maior = funcionarios[0];
    funcionarios.forEach(funcionario => {
      if (funcionario.salario > maior.salario) {
        maior = funcionario
      }
    })
    if(maior) {
        console.log(`Funcionário com maior salário: ${maior.nome} Cargo: ${maior.cargo} Salário: ${maior.salario}`)
    } else {
        console.log('Nenhum funcionário cadastrado.')
    }
    exibirMenu()
  }
  
  function editarFuncionario() {
    rl.question('Digite o nome do funcionário que deseja editar: ', nome => {
        const index = funcionarios.findIndex(funcionario => funcionario.nome === nome)
        if(index !== -1) {
            rl.question('Digite o novo nome do funcionário: ', novoNome => {
                funcionarios[index].nome = novoNome
                console.log('Funcionário editado com sucesso!')
                exibirMenu()
            })
        } else {
            console.log('Funcionário não encontrado.')
            exibirMenu()
        }
    })
  }

  function removerFuncionario() {
    rl.question('Digite o nome do funcionário que deseja remover: ', nome => {
        const index = funcionarios.findIndex(funcionario => funcionario.nome === nome)
        if(index !== -1) {
            funcionarios.splice(index, 1)
            console.log('Funcionário removido com sucesso!')
            exibirMenu()
        } else {
            console.log('Funcionário não encontrado.')
            exibirMenu()
        }
    })
  }
  
  exibirMenu()