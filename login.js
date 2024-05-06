campoEmail = document.getElementById("email");
campoSenha = document.getElementById("password");

function send() {
    if (campoEmail.value == "admin" && campoSenha.value == "admin") {
        window.location.href = "quiz.html";
        console.log("olá");
    }

}