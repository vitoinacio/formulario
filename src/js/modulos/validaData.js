export default function validaData() {
  const inputData = document.querySelector("#nascimento");
  inputData.addEventListener("invalid", function () {
    inputData.setCustomValidity("Digite sua Data de Nascimento");
  });
  inputData.addEventListener("input", function () {
    inputData.setCustomValidity("");
  });
}