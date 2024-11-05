document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert(`Bem vindo, ${email}!`);
    } else {
        alert("E-mail ou senha inválidos. Por favor, tente novamente.");
    }
});

document.getElementById("signUpBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href='index.html';
        alert("Cadastrou-se com sucesso! Agora você pode fazer login.");
    } else {
        alert("Por favor preencha os campos de e-mail e senha.");
    }
});