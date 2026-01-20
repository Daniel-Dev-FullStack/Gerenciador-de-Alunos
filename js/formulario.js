modal.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.querySelector("#input-nome").value;

  const notas = [...document.querySelectorAll("#notas input")].map((input) =>
    Number(input.value)
  );
  

  soma = 0;

  const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

  const turma = document.querySelector("#input-turma").value;
  const idade = Number(document.querySelector("#input-idade").value);

  const atividadeSelecionada = document.querySelector(
    'input[name="atividade"]:checked'
  ).value;

  let existe = alunos.some((el) => el.nome === nome);
  if (!existe) {
    alunos.push({
      nome: nome,
      turma: turma,
      idade: idade,
      notas: notas,
      media: media,
      atividade: atividadeSelecionada,
    });
  } else {
    alert(`Elemento ${nome} já existe. Não adicionado.`);
  }

  adicionarAlunosNaLista();

});
