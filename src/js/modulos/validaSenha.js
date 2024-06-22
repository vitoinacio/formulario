export default function validaSenha(){
  const senhaConfirmacao = document.querySelector("#confirm-senha")
  const senha = document.querySelector('#senha')
  senhaConfirmacao.addEventListener('keyup', function(){

    if (senhaConfirmacao.value != senha.value) {
  
      senhaConfirmacao.setCustomValidity('As senhas não coincidem');
      senha.style.border = "1px solid red";
      senhaConfirmacao.style.border = "1px solid red";
  
    } if (senhaConfirmacao.value == senha.value) {
  
      senhaConfirmacao.setCustomValidity('');
      senha.style.border = "1px solid black";
      senhaConfirmacao.style.border = "1px solid black";
  
    };
  
  });
}