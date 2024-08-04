setInterval(() => { let rgb = "rgb(" + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) +")"; document.querySelector("nav").style.backgroundColor = rgb }, 1000)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Obrigado por entrar em contato! Responderei em breve.');
            form.reset(); // Limpa o formulário após o envio
        });
    }
});
