exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
  for (let numero = 0; numero <= limite; numero++) {
    if (isPrimo(numero)) {
      console.log(numero);
    }
  }
}

function isPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true
}
