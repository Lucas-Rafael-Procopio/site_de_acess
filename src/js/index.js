document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nomeInput').value;
        const senha = document.getElementById('senhaInput').value;

        if (nome && senha === "cursolura") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1GDoSFI28Gjq9DqEI7gzFWXXp_aGaFLNGynn4IWKnJIk/edit?usp=sharing";
        } else {
            alert("palavra-chave incorreto.");
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const icon = document.querySelector('.icon');
    const message = document.getElementById('soonMessage');

    icon.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do clique
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000); // A mensagem desaparecerá após 3 segundos
    });
});


