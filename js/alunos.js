// ARRAY DOS ALUNOS
const alunos = [];

// LISTA NA TABELA
const listaAlunos = document.querySelector("#tabela-container tbody");
listaAlunos.innerHTML = "";

function adicionarAlunosNaLista() {
  listaAlunos.innerHTML = "";

  alunos.forEach((aluno) => {
    listaAlunos.innerHTML += `
      <tr data-nome="${aluno.nome}">
        <td>${aluno.nome}</td>
        <td>${aluno.turma}</td>
        <td>${aluno.idade}</td>
        <td class="mediaAluno">
          ${aluno.media.toFixed(2)}
          <div class="alunoNotas">${aluno.notas}</div>
        </td>
        <td class="atividadeAluno">${aluno.atividade}</td>
      </tr>
    `;
  });
    analisarTabela();
}
