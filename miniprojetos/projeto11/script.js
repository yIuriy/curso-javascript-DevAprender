// Rua Cidade CEP funcao exibirEndereco()

let endereco = {
    rua: "Rua das Laranjeiras",
    cidade: "Nova Pedra do Norte",
    cep:"96428-531",
    }

mostrarEndereco(endereco)

function mostrarEndereco(endereco){
    console.log(`Rua: ${endereco.rua}
Cidade: ${endereco.cidade}
CEP: ${endereco.cep}`)
}
