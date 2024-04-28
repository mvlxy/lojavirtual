document.addEventListener('DOMContentLoaded', function() {
    const pesquisa = document.querySelector('.pesquisa');
    const pesquisaIcon = document.querySelector('.ri-search-line');

    pesquisaIcon.addEventListener('click', function() {
        pesquisa.classList.toggle('active');
    });
});
