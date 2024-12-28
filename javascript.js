document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.getElementById('show-more-button');
    let productsVisible = 9;

    showMoreButton.addEventListener('click', function() {
        const hiddenProducts = document.querySelectorAll('.product.hidden');
        for (let i = 0; i < 10 && i < hiddenProducts.length; i++) {
            hiddenProducts[i].classList.remove('hidden');
        }
        productsVisible += 10;
        if (productsVisible >= document.querySelectorAll('.product').length) {
            showMoreButton.style.display = 'none';
        }
    });
});

function openCarousel(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeCarousel(id) {
    document.getElementById(id).style.display = 'none';
}

// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}