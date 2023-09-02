let pessoa = {
  nome: "João ",
  sobrenome: "de Moraes",
  idade: 12,
  hasJob: false,
  isStudent: true,
};

// Natureza Dinâmica dos Objetos

const mouse = {
  cor: "verde",
  marca: "Logitech"
}
mouse.velocidade = 5000 
delete mouse.velocidade
console.log(mouse)


// Clonar Objetos

const celular = {
  marcaCelular: "ASUS",
  tamanhoTela:{
    horizontal: 155,
    vertical: 55
  },
  ligar: function(){
    console.log("Fazendo ligação...")
  }
}

const novoCelular = Object.assign({
  capacidadeBateria: 6000
} , celular)
console.log(novoCelular)

const novoCelular1 = {...novoCelular}

console.log(novoCelular1)