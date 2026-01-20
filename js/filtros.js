const filtroAtividade = document.getElementById('filtro-atividade');
const filtroSituacao = document.getElementById('filtro-situacao');

function aplicarFiltros() {

  const atividadeSelecionada = filtroAtividade.value;

  const situacaoSelecionada = filtroSituacao.value;

    const linhas = listaAlunos.querySelectorAll('tr');

    linhas.forEach(linha => {

        const atividadeAluno = linha.querySelector('.atividadeAluno').textContent;

        const mediaAluno = parseFloat(linha.querySelector('.mediaAluno').textContent);

        let exibirLinha = true;

        if (atividadeSelecionada !== 'todos' && atividadeAluno !== atividadeSelecionada) {
            exibirLinha = false;
        }

        
        if (situacaoSelecionada == 'aprovado' && mediaAluno < 7) {
            exibirLinha = false;
        }

        if (situacaoSelecionada == 'reprovado' && mediaAluno >= 7) {
            exibirLinha = false;
        }
        
        linha.style.display = exibirLinha ? '' : 'none';
    });

    
}

filtroAtividade.addEventListener('change', aplicarFiltros);
filtroSituacao.addEventListener('change', aplicarFiltros);

