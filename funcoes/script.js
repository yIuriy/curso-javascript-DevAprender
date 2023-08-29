// Function Verbo + Substantivo

// Tipos de Functions

//Realiza uma tarefa e não retorna nada

function dizerNome(){
    console.log('Pedro')
}

dizerNome()

//Realiza uma tarefa e retonra
function somarNumeros(a=0, b=0){
    let soma = a + b
    return soma
}

console.log(somarNumeros(5,9))