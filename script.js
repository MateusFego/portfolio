const dynamicText = document.getElementById('dynamic-text');
const roles = [
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Futuro Analista de Cibersegurança",
    "Entusiasta em Resolução de Problemas",
    "Pronto para Codificar e Aprender"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Deletando texto (simulação de Backspace)
        charIndex--;
        dynamicText.textContent = currentRole.substring(0, charIndex);
    } else {
        // Digitando texto
        charIndex++;
        dynamicText.textContent = currentRole.substring(0, charIndex);
    }

    let typingSpeed = 100; // Velocidade de digitação
    if (isDeleting) {
        typingSpeed /= 2; // Deleta mais rápido
    }

    if (!isDeleting && charIndex === currentRole.length) {
        // Terminou de digitar, espera (2 segundos) e começa a deletar
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Terminou de deletar, muda para a próxima função e recomeça a digitar
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

// Inicia o efeito assim que a página carrega
document.addEventListener('DOMContentLoaded', type);