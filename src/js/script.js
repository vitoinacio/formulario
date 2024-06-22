function validaNome() {
  const nome = document.querySelector("#nome");

  nome.addEventListener("invalid", function () {
    nome.setCustomValidity("Digite seu nome Completo");
  });
  nome.addEventListener("input", function () {
    nome.setCustomValidity("");
  });
}

function validaData() {
  const inputData = document.querySelector("#nascimento");
  inputData.addEventListener("invalid", function () {
    inputData.setCustomValidity("Digite sua Data de Nascimento");
  });
  inputData.addEventListener("input", function () {
    inputData.setCustomValidity("");
  });
}

function formatCpf(){
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


function formatTel(tel) {
  tel=tel.replace(/\D/g,"")
  tel=tel.replace(/^(\d)/,"+$1")
  tel=tel.replace(/(.{3})(\d)/,"$1($2")
  tel=tel.replace(/(.{6})(\d)/,"$1)$2")
  if(tel.length == 12) {
      tel=tel.replace(/(.{1})$/,"-$1")
  } else if (tel.length == 13) {
      tel=tel.replace(/(.{2})$/,"-$1")
  } else if (tel.length == 14) {
      tel=tel.replace(/(.{3})$/,"-$1")
  } else if (tel.length == 15) {
      tel=tel.replace(/(.{4})$/,"-$1")
  } else if (tel.length > 15) {
      tel=tel.replace(/(.{4})$/,"-$1")
  }
  return tel;
}

function formatCell(){
  const cell = document.querySelector("#telefone-celular")
  cell.addEventListener('keyup', function(){
    cell.value = formatTel(cell.value)
  })
  cell.addEventListener("invalid", function () {
    cell.setCustomValidity("Deve possuir o formato +55 (DDD) 00000-0000");
  });
  cell.addEventListener("input", function () {
    cell.setCustomValidity("");
  });
}

function formatFixo(){
  const fixo = document.querySelector("#telefone-fixo")
  fixo.addEventListener('keyup', function(){
    fixo.value = formatTel(fixo.value)
    if (fixo.value[7] == 2 || fixo.value[7] == 3 || fixo.value[7] == 4 || fixo.value[7] == 5) {
      fixo.setCustomValidity('')
    } else {
      fixo.setCustomValidity('O telefone precisa ser valido')
    }
  })
}

function validaEndereco(){
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

function validaLogin(){
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

function validaSenha(){
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

validaNome();
validaData();
formatCpf();
formatCell();
formatFixo();
validaEndereco();
validaLogin();
validaSenha();





