// Function Verbo + Substantivo

// Tipos de Functions

//Realiza uma tarefa e não retorna nada

function dizerNome() {
  console.log("Pedro");
}

dizerNome();

//Realiza uma tarefa e retonra
function somarNumeros(a = 0, b = 0) {
  let soma = a + b;
  return soma;
}

console.log(somarNumeros(5, 9));

// Factory Functions

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log("Fazendo ligação...");
    },
  };
}

// Constructor Functions

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  (this.marcaCelular = marcaCelular),
    (this.tamanhoTela = tamanhoTela),
    (this.capacidadeBateria = capacidadeBateria),
    (this.ligar = function () {
      console.log("Fazendo ligação...");
    });
}

const celular = new Celular("Samsung", 6.7, 6000);

console.log(celular);

// Arrow Functions
const pessoas = [
  { nome: "Vil", idade: 12 },
  { nome: "Pedro", idade: 65 },
];

console.log(pessoas.find((pessoa) => pessoa.nome === "Vil"));
