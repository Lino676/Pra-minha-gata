let index = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

const container = document.querySelector('.carrossel-container');

document.querySelector('.anterior').addEventListener('click', function() {
    index = (index - 1 + totalItems) % totalItems;
    atualizarCarrossel();
});

document.querySelector('.proximo').addEventListener('click', function() {
    index = (index + 1) % totalItems;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const deslocamento = -index * 100; // Para mover para o próximo item
    container.style.transform = `translateX(${deslocamento}%)`;
}

