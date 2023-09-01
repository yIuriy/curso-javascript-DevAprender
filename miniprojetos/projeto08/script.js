const listaNotas = [];

console.log(mediaDoAluno(listaNotas));

function calcularMedia(notas) {
  let numeroDeAlunos = notas.length;
  let notaTotal = 0;
  if (numeroDeAlunos == 0) {
    return mediaDoAluno = 0
  } else {
    for (let i = 0; i < numeroDeAlunos; i++) {
      notaTotal += notas[i];
    }
    return (mediaDoAluno = notaTotal / numeroDeAlunos);
  }
}

function mediaDoAluno(notas) {
  const mediaDoAluno = calcularMedia(notas);
  if (mediaDoAluno == 0) {
    return "Nenhuma nota foi informada!";
  } else {
    if (mediaDoAluno <= 59) {
      return "Nota: F";
    }
    if (mediaDoAluno <= 69) {
      return "Nota: D";
    }
    if (mediaDoAluno <= 79) {
      return "Nota: C";
    }
    if (mediaDoAluno <= 89) {
      return "Nota: B";
    }
    if (mediaDoAluno <= 100) {
      return "Nota: A";
    }
  }
}
