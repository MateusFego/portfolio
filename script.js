const textElement = document.getElementById('dynamic-text');
const phrases = [
    "sou um estudante de Cybersecurity",
    "estou focado em Infraestrutura e Redes",
    "estou construindo um Homelab 24/7",
    "estou praticando Monitoramento e SIEM",
    "estou evoluindo em Segurança Ofensiva e Defensiva"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    const current = phrases[i];
    
    if (isDeleting) {
        // Apagando o texto
        textElement.textContent = current.substring(0, j - 1);
        j--;
    } else {
        // Escrevendo o texto
        textElement.textContent = current.substring(0, j + 1);
        j++;
    }

    // Velocidade: Digita mais devagar (100ms) e apaga rápido (50ms)
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && j === current.length) {
        speed = 2000; // Pausa de 2 segundos quando a frase está completa
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length; // Passa para a próxima frase
        speed = 500; // Pequena pausa antes de começar a escrever a próxima
    }

    setTimeout(type, speed);
}

// Inicializa o efeito assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', type);