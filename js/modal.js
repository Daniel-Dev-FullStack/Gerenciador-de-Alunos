const modal = document.querySelector("#modalCadastro");

// ABRIR MODAL
document
  .querySelector("#adicionarAluno")
  .addEventListener("click", () => (modal.style.display = "block"));

// FECHAR MODAL
document
  .querySelector("#modalCadastro header button")
  .addEventListener("click", () => (modal.style.display = "none"));
