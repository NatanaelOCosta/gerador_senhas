// Funcao para gerar a senha
function gerarSenha() {
  var tamanho = document.getElementById("tamanho").value;
  var incluiNumeros = document.getElementById("incluiNumeros").checked;
  var incluiMaiusculas = document.getElementById("incluiMaiusculas").checked;
  var incluiMinusculas = document.getElementById("incluiMinusculas").checked;
  var incluiCaracteresEspeciais = document.getElementById("incluiCaracteresEspeciais").checked;

  var maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var minusculas = "abcdefghijklmnopqrstuvwxyz";
  var numeros = "0123456789";
  var caracteresEspeciais = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var senha = "";

  if (incluiNumeros)
    senha += numeros;
  if (incluiCaracteresEspeciais)
    senha += caracteresEspeciais;
  if (incluiMaiusculas)
    senha += maiusculas;
  if (incluiMinusculas)
    senha += minusculas;

  var senhaGerada = "";
  for (var i = 0; i < tamanho; i++) {
    senhaGerada += senha.charAt(Math.floor(Math.random() * senha.length));
  }

  document.getElementById("senhaGerada").textContent = senhaGerada;
}

//Funcao para determinar a forca dessa senha criada de acordo com o que o usuário seleciona
function calcularForcaSenha() {
    var tamanho = parseInt(document.getElementById("tamanho").value);
    var incluiNumeros = document.getElementById("incluiNumeros").checked;
    var incluiMaiusculas = document.getElementById("incluiMaiusculas").checked;
    var incluiMinusculas = document.getElementById("incluiMinusculas").checked;
    var incluiCaracteresEspeciais = document.getElementById("incluiCaracteresEspeciais").checked;
  
    var forcaSenha = 0;
  
    if (incluiNumeros) {
      forcaSenha++;
    }
    if (incluiMaiusculas) {
      forcaSenha++;
    }
    if (incluiMinusculas) {
      forcaSenha++;
    }
    if (incluiCaracteresEspeciais) {
      forcaSenha++;
    }
  
    if (forcaSenha === 0) {
      return -1; // Nenhum elemento está marcado
    } else if (forcaSenha === 4 && tamanho >= 8) {
      return 4; // Todos os elementos estão marcados e tamanho é maior ou igual a 8
    } else {
      return forcaSenha;
    }
}
  


function mostrarMensagemForcaSenha(forcaSenha) {
  var status = document.getElementById("status");
  var forcaTexto = "";

  if (forcaSenha === 0) {
    forcaTexto = "Senha muito fraca";
  } else if (forcaSenha === 1) {
    forcaTexto = "Senha fraca";
  } else if (forcaSenha === 2) {
    forcaTexto = "Senha moderada";
  } else if (forcaSenha === 3) {
    forcaTexto = "Senha forte";
  } else if (forcaSenha === 4) {
    forcaTexto = "Senha muito forte";
  } else {
    forcaTexto = "Senha indefinida";
  }

  status.textContent = "Força da senha: " + forcaTexto;
}

function atualizarMensagemForcaSenha() {
  var forcaSenha = calcularForcaSenha();
  mostrarMensagemForcaSenha(forcaSenha);
}

window.onload = function() {
    gerarSenha();
    atualizarMensagemForcaSenha();
    };
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var tamanhoInput = document.getElementById("tamanho");
    
    checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
    gerarSenha();
    atualizarMensagemForcaSenha();
    });
    });
    
    tamanhoInput.addEventListener("input", function() {
    gerarSenha();
    atualizarMensagemForcaSenha();
    });
    
    // Botoes de aumentar e diminuir a senha
    function decreaseSliderValue() {
    var slider = document.getElementById("tamanho");
    slider.value = parseInt(slider.value) - 1;
    updateSliderValue();
    }
    
    function increaseSliderValue() {
    var slider = document.getElementById("tamanho");
    slider.value = parseInt(slider.value) + 1;
    updateSliderValue();
    }
    
    function updateSliderValue() {
    var slider = document.getElementById("tamanho");
    var tamanhoSenha = document.getElementById("tamanhoSenha");
    tamanhoSenha.textContent = "Tamanho da senha: " + slider.value;
    }
    
    // Botao Copiar Senha
    function copiarSenhaParaClipboard() {
    var senhaCopiada = document.getElementById("senhaGerada").textContent;
    var inputElement = document.createElement('input');
    inputElement.value = senhaCopiada;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    exibirMensagem();
    }
    
    // Exibe a janela de mensagem
    function exibirMensagem() {
    var mensagem = document.getElementById("mensagem");
    mensagem.style.display = "block";
    }
    
    // Fecha a janela de mensagem
    function fecharMensagem() {
    var mensagem = document.getElementById("mensagem");
    mensagem.style.display = "none";
    }