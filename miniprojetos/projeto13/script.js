let postagem = {
    titulo: "a",
    mensagem: "lorem",
    autor: "c",
    vizualizacoes: 200,
    comentarios: [
    {autor:"a", mensagem:"lorem"},
    {autor:"b", mensagem:"lorem"}],
    estaAoVivo: true    
}

console.log(postagem)

function CriarPostagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem1 = new CriarPostagem("a","b","c")

console.log(postagem1)