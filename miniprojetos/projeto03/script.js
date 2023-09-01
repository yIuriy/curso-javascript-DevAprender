
const resultado = fizzBuzz(2);
console.log(resultado);


function fizzBuzz(valorEntrada) {
  if (typeof valorEntrada != "number") {
    return "Não é  um número!";
  } else {
    if (valorEntrada % 3 == 0 && valorEntrada % 5 != 0) {
      return "Fizz";
    } else if (valorEntrada % 5 == 0 && valorEntrada % 3 != 0) {
      return "Buzz";
    } else if (valorEntrada % 3 == 0 && valorEntrada % 5 == 0) {
      return "FizzBuzz";
    } else {
      return valorEntrada;
    }
  }
}

