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
import itensCarrosel from './jsons/produtos_carrosel.json' with {type: 'json'};

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


// Criando os cards de cima
import itensInteresse from './jsons/produtos_interesse.json' with {type: 'json'};

const containerCardsCima = document.querySelector('.cards-cima');

//criando os cards de cima
function criarCardCima(itemAtual) {

    // Container Principal
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card', 'janela');

    // Pode te interessar
    let titulo = document.createElement('p');
    titulo.classList.add('titulo');
    titulo.textContent = 'Pode te interessar';

    // Imagem produto
    let img = document.createElement('img');
    img.src = 'img/' + itemAtual.imagem;
    img.alt = itemAtual.nome;

    // Título Produto
    let nomeProduto = document.createElement('p');
    nomeProduto.classList.add('nome');
    nomeProduto.textContent = itemAtual.nome;

    // Container dos valores
    let valoresContainer = document.createElement('div');
    valoresContainer.classList.add('valores');

    // Pega desconto do JSON
    let desconto = itemAtual.desconto;

    // Preços
    let precoAntes = itemAtual.preco.toFixed(2).replace('.', ',');
    let precoAgora = (itemAtual.preco * (1 - desconto / 100)).toFixed(2).replace('.', ',');

    let valorAntes = document.createElement('p');
    valorAntes.classList.add('valor_antes');
    valorAntes.textContent = `R$ ${precoAntes}`;

    let valoresAtuais = document.createElement('div');
    valoresAtuais.classList.add('valores_atuais');

    let valorAgora = document.createElement('p');
    valorAgora.classList.add('valor_agora');
    valorAgora.textContent = `R$ ${precoAgora}`;

    let porcentagem = document.createElement('p');
    porcentagem.classList.add('porcentagem_desconto');
    porcentagem.textContent = `${desconto}% OFF`;

    valoresAtuais.appendChild(valorAgora);
    valoresAtuais.appendChild(porcentagem);

    valoresContainer.appendChild(valorAntes);
    valoresContainer.appendChild(valoresAtuais);

    // Frete grátis
    let frete = document.createElement('p');
    frete.classList.add('frete');
    frete.textContent = 'Frete Grátis';

    // Montando card
    cardContainer.appendChild(titulo);
    cardContainer.appendChild(img);
    cardContainer.appendChild(nomeProduto);
    cardContainer.appendChild(valoresContainer);
    cardContainer.appendChild(frete);

    return cardContainer;
}

itensInteresse.forEach(item => {
    let card = criarCardCima(item);
    containerCardsCima.appendChild(card);
});