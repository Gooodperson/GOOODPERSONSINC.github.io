function submitForm() {
    // Простой пример функции обработки отправки формы
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var responseDiv = document.getElementById("response");

    if (name && email && message) {
        responseDiv.innerHTML = `<p>Спасибо, ${name}! Ваше сообщение отправлено.</p>`;
    } else {
        responseDiv.innerHTML = "<p>Пожалуйста, заполните все поля формы.</p>";
    }
}
