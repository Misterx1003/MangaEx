document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Для прикладу, тут простий логін - паролі збережені в JS (в реальному проєкті - сервер!)
    const users = {
        'user1': 'password123',
        'mangaFan': 'readmanga',
    };

    const messageEl = document.getElementById('message');

    if (users[username] && users[username] === password) {
        messageEl.style.color = 'green';
        messageEl.textContent = 'Вхід успішний! Переходимо до читання манги...';
        // Тут можна додати редірект, наприклад:
        // window.location.href = 'manga.html';
    } else {
        messageEl.style.color = 'red';
        messageEl.textContent = 'Неправильний логін або пароль.';
    }
});
