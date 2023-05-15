// Funcao de gerar a senha
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

// Gerar a senha assim que a página for aberta
window.onload = function() {
    gerarSenha();
}

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