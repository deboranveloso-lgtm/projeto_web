// Localiza o botão pelo seu ID
const botao = document.getElementById("aumentarTexto");

// Cria uma ação quando o botão for clicado
botao.addEventListener("click", function () {

    // Adiciona ou remove a classe "texto-maior"
    document.body.classList.toggle("texto-maior");

});