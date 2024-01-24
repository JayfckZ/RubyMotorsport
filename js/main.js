$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) ______-____'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'O nome deve ser informado.',
            email: 'Insira um email válido.',
            telefone: 'Insira um telefone válido.',
            mensagem: 'Insira sua mensagem.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos){
                alert(`Há ${camposIncorretos} campos inválidos.`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 700)
    })




    $('#btnSobre').click(function(){
        const destino = $('#sobre')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 700)
    })

    $('#btnDestaque').click(function(){
        const destino = $('#destaque')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 700)
    })

    $('#btnPromo').click(function(){
        const destino = $('#promocoes')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 700)
    })

    $('#btnContato').click(function(){
        const destino = $('#contato')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 700)
    })
})