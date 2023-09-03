const button = document.getElementById("btn");
const res = document.querySelector("p#txtarea");
button.addEventListener("click", verificarEntrada);
const pessoasPermitidas = [
  {
    nomeAnfitriao: "Cristian",
    nomeConvidadosCristian: ["Pedro", "Maria", "João"],
  },
  { nomeAnfitriao: "Paulo", nomeConvidadosPaulo: ["Vitor", "José"] },
];

function verificarEntrada() {
  const nomeConvidado = document.getElementById("nomeConvidado");
  const nomeAnfitriao = document.getElementById("nomeAnfitriao");
  console.log(nomeAnfitriao.nomeAnfitriao);
}

//includes