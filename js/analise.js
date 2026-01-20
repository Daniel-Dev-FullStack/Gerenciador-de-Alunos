const quantidadeAlunos = document.querySelector("#totalAlunos");
const quantidadeAlunosAprovados = document.querySelector("#alunosAprovados");
const quantidadeAlunosReprovados = document.querySelector("#alunosReprovados");
const mediaGeralTurma = document.querySelector("#mediaGeral");

// ATUALIZA A QUANTIDADE DE ALUNOS
function analisarTabela() {
  // QUANTIDADE GERAL
  quantidadeAlunos.textContent = alunos.length;

  // QUANTIDADE APROVADOS
  const aprovados = alunos.filter((aluno) => aluno.media >= 7);

  quantidadeAlunosAprovados.textContent = aprovados.length;

  // QUANTIDADE REPROVADOS
  const reprovados = alunos.filter((aluno) => aluno.media < 7);

  quantidadeAlunosReprovados.textContent = reprovados.length;

  // CALCULO MEDIA GERAL

  const mediaGeral =
    alunos.reduce((total, aluno) => total + aluno.media, 0) / alunos.length;
    
  mediaGeralTurma.textContent = mediaGeral.toFixed(2);
}
