export default function formatTel(){
  function fromatRxCell(tel) {
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
      cell.value = fromatRxCell(cell.value)
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
      fixo.value = fromatRxCell(fixo.value)
      if (fixo.value[7] == 2 || fixo.value[7] == 3 || fixo.value[7] == 4 || fixo.value[7] == 5) {
        fixo.setCustomValidity('')
      } else {
        fixo.setCustomValidity('O telefone precisa ser valido')
      }
    })
  }

  formatCell();
  formatFixo();
}