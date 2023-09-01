
console.log(verificarVelocidade(200));

function verificarVelocidade(velocidade) {
  const LimiteVelocidade = 70;
  const KmPorPonto = 5;
  if (velocidade <= 70) {
    return "Dentro do limite permitido!";
  } else {
    let pontosNaCarteira = Math.floor(
      (velocidade - LimiteVelocidade) / KmPorPonto
    );
    if (pontosNaCarteira > 12) {
      return `Você levou mais de 12 pontos na carteira, e teve sua carteira suspendida!`;
    }
    return `Você levou ${pontosNaCarteira} pontos na carteira `;
  }
}
