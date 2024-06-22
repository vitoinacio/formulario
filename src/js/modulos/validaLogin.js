export default function validaLogin(){
  const login = document.querySelector('#login')
  login.addEventListener('input', function(){
    const valida = /[0-9]/;
    if (valida.test(login.value)){
      login.setCustomValidity("O login deve conter somente letras")
    } else {
      login.setCustomValidity("");
    }
  })
}