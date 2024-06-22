export default function validaNome() {
  const nome = document.querySelector("#nome");
  const nomeMae = document.querySelector("#nome-materno")

  nome.addEventListener("invalid", function () {
    nome.setCustomValidity("Digite seu nome Completo");
  });
  nome.addEventListener("input", function () {
    nome.setCustomValidity("");
  });

  nomeMae.addEventListener("invalid", function () {
    nomeMae.setCustomValidity("Digite o nome da sua Mae Completo");
  });
  nomeMae.addEventListener("input", function () {
    nomeMae.setCustomValidity("");
  });
}

