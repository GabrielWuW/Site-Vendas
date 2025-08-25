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

// Carrosel
import itensCarrosel from './produtos_carrosel.json' with {type: 'json'};

let itemAtual = 0;

function adicionarItemCarrosel(arrayDeItens) {
    let arrayAtual = arrayDeItens[itemAtual];

    let tituloCarrosel = document.querySelector('.nomeCarrosel');
    tituloCarrosel.textContent = arrayAtual.nome;

    let descCarrosel = document.querySelector('.descCarrosel');
    descCarrosel.textContent = arrayAtual.descricao;

    let imgCarrosel = document.querySelector('.imgCarrosel');
    imgCarrosel.src = 'img/' + arrayAtual.imagem;
}

function avancarItem(arrayDeItens) {
    if (itemAtual < arrayDeItens.length - 1) {
        itemAtual++;
    } else {
        itemAtual = 0;
    }
    adicionarItemCarrosel(arrayDeItens);
}

function voltarItem(arrayDeItens) {
    if (itemAtual > 0) {
        itemAtual--;
    } else {
        itemAtual = arrayDeItens.length - 1;
    }
    adicionarItemCarrosel(arrayDeItens);
}

const btnAvancar = document.querySelector('.right');
btnAvancar.addEventListener('click', () => avancarItem(itensCarrosel));

const btnVoltar = document.querySelector('.left');
btnVoltar.addEventListener('click', () => voltarItem(itensCarrosel));

// Exibe o primeiro item ao carregar
adicionarItemCarrosel(itensCarrosel);