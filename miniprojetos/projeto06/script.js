const filme = {
  título: "Vingadores",
  ano: 2018,
  diretor: "Robin",
  personagem: "Thor",
};

exibirPropriedades(filme);

function exibirPropriedades(objeto) {
  for (let key in objeto) {
    let value = objeto[key];
    if (typeof(value) == "string") console.log(`${key}: ${value}`);
  }
}
