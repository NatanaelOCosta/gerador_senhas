function gerarSenha() {
    var tamanho = document.getElementById("tamanho").value;
    var incluiNumeros = document.getElementById("incluiNumeros").checked;
    var incluiCaracteresEspeciais = document.getElementById("incluiCaracteresEspeciais").checked;

    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var numeros = "0123456789";
    var caracteresEspeciais = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var senha = "";

    senha += caracteres;
    if (incluiNumeros)
        senha += numeros;
    if (incluiCaracteresEspeciais)
        senha += caracteresEspeciais;

    var senhaGerada = "";
    for (var i = 0; i < tamanho; i++) {
        senhaGerada += senha.charAt(Math.floor(Math.random() * senha.length));
    }

    document.getElementById("senhaGerada").textContent = "Senha gerada: " + senhaGerada;
}
