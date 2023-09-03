let faixas1 = [
  { tootip: `Até RS$800`, minimo: 0, maximo: 800 },
  { tootip: `De RS$800 a R$1100`, minimo: 800, maximo: 1100 },
  { tootip: `R$1110 ou mais`, minimo: 1100, maximo: 10000 },
];

let faixas2 = [
  criarFaixaPreco("a", 0, 100),
  criarFaixaPreco("a", 100, 200),
  criarFaixaPreco("a", 200, 300),
];

let faixas3 = [
  new FaixaPreco("v", 2000, 3000),
  new FaixaPreco("v", 3000, 4000),
  new FaixaPreco("v", 4000, 5000),
];

console.log(faixas1);
console.log(faixas2);
console.log(faixas3);

function criarFaixaPreco(tooltip, precoMinimo, precoMaximo) {
  return { tooltip, precoMinimo, precoMaximo };
}

function FaixaPreco(tooltip, minimo, maximo) {
  (this.tooltip = tooltip), (this.minimo = minimo);
  this.maximo = maximo;
}
