export default function validaEndereco(){
  const endereco = document.querySelector('#endereco')
  endereco.addEventListener('input', function(){
    const enderecoForm = endereco.value.trim().split(" ")
    if (enderecoForm[0] == 'Rua' || enderecoForm[0] == 'Travessa' || enderecoForm[0] == 'Avenida' || enderecoForm[0] == 'Av.') {
      endereco.setCustomValidity('')
    } else {
      endereco.setCustomValidity('Precisa ser iniciado com "Rua", "Travessa", "Avenida", "Av."')
    }
  })
}