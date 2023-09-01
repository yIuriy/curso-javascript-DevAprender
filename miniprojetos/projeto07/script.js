somar(20);

function somar(limite) {
  let multiplosDe3 = 0;
  let multiplosDe5 = 0;
  for (let i = 0; i <= limite; i++) {
    if (i % 3 == 0) {
      multiplosDe3 += i;
    }
    if (i % 5 == 0) {
      multiplosDe5 += i;
    }
  }

  somaMultiplos = multiplosDe3 + multiplosDe5;

  if (somaMultiplos == 0) {
    console.log("Não nenhum múltiplo de 3 ou 5 no limite informado!");
  } else {
    console.log(`A soma de todos os múltiplos de 3 e 5 é ${somaMultiplos}.`);
  }
}
