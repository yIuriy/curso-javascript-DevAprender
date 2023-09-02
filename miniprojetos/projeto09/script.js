exibirAsteriscos(445)

function exibirAsteriscos(linhas){
    let asteriscos = []
    for(let linha = 1; linha <= linhas; linha++){
        asteriscos.push("*")
        console.log(asteriscos.join(""))
    }
}