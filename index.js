  
document.addEventListener('DOMContentLoaded', async () => {
    fraseExibicao = document.getElementById('fraseExibicao');
    autorFrase = document.getElementById('autorFrase');
    fraseExibicao.innerText = 'Carregando...';
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    fraseExibicao.innerText = result.data[0].quoteText;
    autorFrase.innerText = result.data[0].quoteAuthor;
});