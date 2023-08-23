$(document).ready(function() { // ready significa preparar
    //console.log(document.querySelector('header button'));
    
    // console.log($('input#botao-cancelar'));

    // document.querySelector('header button').addEventListener('click', function() { // a functiom é um callback do 'click' do button

    // })  
    
    $('header button').click(function() { // a functiom é um callback do 'click' do button
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem); // appendTo significa anexar a
        $(`<div class="overlay-imagem-link"><a href="${enderecoDaNovaImagem}" title="Ver imagem em tamamho real" target="_blank">Ver imagem em tamamho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); // 1 milissegundo
        $('#endereco-imagem-nova').val('');
    })
})