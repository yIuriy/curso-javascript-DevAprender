const endereco1 = new Endereco("a", "b", "c");
const endereco2 = new Endereco("a", "b", "c");
const endereco3 = endereco1;

console.log(isIguais(endereco1, endereco2));

console.log(temEnderecoDeMemoriaIguais(endereco1, endereco2));

function Endereco(rua, cidade, cep) {
  (this.rua = rua), (this.cidade = cidade), (this.cep = cep);
}

function isIguais(endereco1, endereco2) {
  return (
    endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
  );
}

function temEnderecoDeMemoriaIguais() {
  return endereco1 === endereco2;
}
