// JavaScript para mover o cursor personalizado com o mouse
document.addEventListener('mousemove', function (event) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});

// JavaScript para controlar o efeito de hover nos links e aumentar o cursor
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.add('cursor-grow');
    });

    link.addEventListener('mouseleave', () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.remove('cursor-grow');
    });
});

// Função para inicializar o cursor no centro da tela ao carregar a página
window.addEventListener('load', function () {
    const cursor = document.getElementById('cursor');
    cursor.style.left = (window.innerWidth / 2) + 'px';
    cursor.style.top = (window.innerHeight / 2) + 'px';
});

// Adicionando o efeito de "pulsar" para o cursor personalizado
const cursor = document.getElementById('cursor');
cursor.classList.add('pulsating-cursor');
