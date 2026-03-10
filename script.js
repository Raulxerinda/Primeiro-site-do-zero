document.addEventListener('DOMContentLoaded', () => {
    // 1. Encontra todos os cartões de produto pequenos (os 12 sapatos)
    const productCards = document.querySelectorAll('.product-card img');
    
    // 2. Encontra a imagem grande na seção principal pelo seu ID
    const mainShoeImage = document.getElementById('main-shoe-image');

    // 3. Adiciona um "ouvinte de evento de clique" para cada imagem pequena
    productCards.forEach(cardImg => {
        cardImg.addEventListener('click', function() {
            // Quando clicado, muda o 'src' (fonte da imagem) da imagem principal
            // para o 'src' da imagem pequena clicada.
            mainShoeImage.src = this.src;
        });
    });
});
