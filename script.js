window.onload = function () {
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

    const botaoSim = document.getElementById('botao1');
    const botaoNao = document.getElementById('botao2');
    const container2 = document.getElementById('botoes');
    
    if (botaoSim && botaoNao) {
        botaoSim.addEventListener('click', () => {
            const whatsappLink = "https://wa.me/5562994494756?text=Eu%20aceito%20namorar%20com%20você%20meu%20amor❤️❤️❤️"
            window.location.href = whatsappLink;
        });

        botaoNao.addEventListener('click', (e) => {
            e.preventDefault();  // Impede o comportamento padrão do botão (caso haja algum)
            moverBotao();  // Mover o botão "Não"
        });
    } else {
        console.log("Botões 'Sim' ou 'Não' não encontrados.");
    }

    function moverBotao() {
        // Verifica o tamanho do contêiner e do botão
        const largura = container2.clientWidth - botaoNao.offsetWidth;
        const altura = container2.clientHeight - botaoNao.offsetHeight;
        
        // Gera posições aleatórias para mover o botão
        const novoX = Math.random() * largura;
        const novoY = Math.random() * altura;
        
        // Atribui as novas posições ao botão
        botaoNao.style.left = `${novoX}px`;
        botaoNao.style.top = `${novoY}px`;
    }
}
