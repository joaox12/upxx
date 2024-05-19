
document.addEventListener("DOMContentLoaded", function() {
    var btnSignup = document.querySelector("#signup");

    btnSignup.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos de entrada
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var numero = document.getElementById("numero").value;
        var senha = document.getElementById("senha").value;
        var confirmeSenha = document.getElementById("confirme-senha").value;

        // Validações
        if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || numero.trim() === "" || senha.trim() === "" || confirmeSenha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return; // Encerra a função se algum campo estiver vazio
        }

        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem. Por favor, confirme sua senha corretamente.");
            return; // Encerra a função se as senhas não coincidirem
        }

        // Adicione outras validações conforme necessário

        // Se todas as validações passarem, redirecionar para outra página
        window.location.href = "tela2/outraTela.html";
    });
});