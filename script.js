//Efeito do header desaparecer

const header = document.querySelector('.menuDois');
let ultimaPosicaoScroll = window.scrollY;

header.classList.add('visivel');

window.addEventListener('scroll', () => {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual > ultimaPosicaoScroll) {
        header.classList.remove('visivel');
        header.classList.add('oculto');
    } else {
        header.classList.remove('oculto');
        header.classList.add('visivel');
    }

    ultimaPosicaoScroll = posicaoAtual;
});

//Carrosel
