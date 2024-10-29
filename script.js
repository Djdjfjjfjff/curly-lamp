
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

if (email === 'usuario@example.com' && senha === '123456') {
document.getElementById('mensagem').innerText = 'Login efetuado com sucesso!';
} else {
document.getElementById('mensagem').innerText = 'E-mail ou senha incorretos!';
}
});