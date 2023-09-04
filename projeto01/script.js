const button = document.getElementById("btn");
const res = document.querySelector("p#txtarea");
button.addEventListener("click", verificarEntrada);
const nomeConvidadosCristian = ["Pedro", "Maria", "João"];

function verificarEntrada() {
  const nomeConvidado = document.getElementById("nomeConvidado").value;
  const nomeAnfitriao = document.getElementById("nomeAnfitriao").value;
  if(nomeAnfitriao === "Cristian" && nomeConvidadosCristian.includes(nomeConvidado)){
    res.innerHTML = "Você pode entrar!"
  }
  else{
    res.innerHTML = "Você não pode entrar!"
  }
}
