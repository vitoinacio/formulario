export default function formatCpf(){
  const cpf = document.querySelector('#cpf')
  cpf.addEventListener('keypress', function(){
    const value = cpf.value.replace(/\D/g,"")
    const formatValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4')
    cpf.value = formatValue.substr(0,13);
  })
  cpf.addEventListener("invalid", function () {
    cpf.setCustomValidity("Digite seu cpf completo");
  });
  cpf.addEventListener("input", function () {
    cpf.setCustomValidity("");
  });
}