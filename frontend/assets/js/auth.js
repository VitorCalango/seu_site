// auth.js - Lógica de Autenticação (Simulada no Frontend)

document.addEventListener('DOMContentLoaded', function() {
    const authLinks = document.querySelector('.auth-links'); // Botões Login/Registrar
    const userProfileMenu = document.querySelector('.user-profile-menu'); // Avatar e Dropdown

    // Funções para manipular a visibilidade no cabeçalho
    function showLoggedInState() {
        if (authLinks) authLinks.style.display = 'none';
        if (userProfileMenu) userProfileMenu.style.display = 'flex';
    }

    function showLoggedOutState() {
        if (authLinks) authLinks.style.display = 'flex';
        if (userProfileMenu) userProfileMenu.style.display = 'none';
    }

    // Verifica o estado de login ao carregar a página
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            showLoggedInState();
        } else {
            showLoggedOutState();
        }
    }

    // Inicializa a verificação de status (executa a cada carregamento de página)
    checkLoginStatus();

    // --- Lógica para Login (Simulada) ---
    // Adicione id="login-form" à sua tag <form> em login.html
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // *** ESTA É A SIMULAÇÃO DO FRONTEND ***
            // Em um sistema real, você faria uma requisição (fetch/axios) para o seu backend aqui.
            // O backend verificaria as credenciais no banco de dados e retornaria sucesso ou falha.

            const email = loginForm.querySelector('#login-email').value;
            const password = loginForm.querySelector('#login-password').value;

            console.log('Tentativa de login com:', { email, password });

            // Simulação de sucesso no login:
            // Para testar a falha, você pode adicionar uma condição, ex: if (email !== 'test@example.com' || password !== 'password123') { alert('Credenciais inválidas!'); return; }
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login simulado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página principal

            // A função showLoggedInState() já será chamada automaticamente no próximo carregamento da página index.html
            // se o localStorage estiver definido.
        });
    }

    // --- Lógica para Registro (Simulada) ---
    // Adicione id="register-form" à sua tag <form> em registrar.html
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // *** ESTA É A SIMULAÇÃO DO FRONTEND ***
            // Em um sistema real, você faria uma requisição para o backend para criar o novo usuário no banco de dados.

            const name = registerForm.querySelector('#register-name').value;
            const email = registerForm.querySelector('#register-email').value;
            const password = registerForm.querySelector('#register-password').value;
            const confirmPassword = registerForm.querySelector('#confirm-password').value;

            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            console.log('Tentativa de registro com:', { name, email, password });

            // Simulação de sucesso no registro:
            // Em um sistema real, o backend retornaria o status do registro.
            localStorage.setItem('isLoggedIn', 'true'); // Loga o usuário automaticamente após o registro simulado
            alert('Registro simulado com sucesso! Você está logado.');
            window.location.href = 'index.html'; // Redireciona para a página principal
        });
    }

    // --- Lógica para Logout (Simulada) ---
    const logoutButton = document.querySelector('.logout-item');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link padrão
            // Em um sistema real, você faria uma requisição para o backend para invalidar a sessão.
            localStorage.setItem('isLoggedIn', 'false'); // Define como deslogado
            alert('Logout simulado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página principal
        });
    }

    // Lógica da janela flutuante do perfil (ativa/desativa a classe 'active')
    const userAvatar = document.getElementById('userAvatar');
    const userDropdown = document.getElementById('userDropdown');
    const userProfileMenu = document.querySelector('.user-profile-menu');

    if (userAvatar && userDropdown && userProfileMenu) {
        userAvatar.addEventListener('click', function(event) {
            event.stopPropagation();
            userProfileMenu.classList.toggle('active');
        });

        // Fecha o dropdown se o usuário clicar fora dele
        document.addEventListener('click', function(event) {
            if (!userProfileMenu.contains(event.target) && userProfileMenu.classList.contains('active')) {
                userProfileMenu.classList.remove('active');
            }
        });

        // Impede que cliques dentro do dropdown fechem o menu
        userDropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});