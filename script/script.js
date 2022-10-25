$(function () {

    $('body').css('background-color', 'yellow');
    $('h1').text('Hallo,world');
    $('h1').css('font-size', '80px');
    $('h1').css('color', 'red');
    $('h1').css('text-align', 'center');
    $('h1').css('background-color', 'black');

    $('p').text('this is my website');
    $('p').css('text-align', 'center');
    $('p').css('font-size', '60px');

    $('.button').text('do you wanna enter?');
    $('.button2').text('you should go back');
    $('.button').css('font-size', '50px');
    $('div').css('text-align', 'center');

    $('.button2').css('display', 'none');

    $('.button').on({

        "click": () => {
            $('h1').text('WORRY');
            $('h1').css('background-color', 'red');
            $('h1').css('color', 'white');
            $('p').text('Your Mother and father watching you. be careful to sex with your tenga');
           
            $('.button').css('display', 'none');
            $('.button2').css('display', 'inline');
            
        },

        "mouseenter": () => {
            $('.button').css('background-color', 'red');
            $('.button').text('it is to denger');
        },

        "mouseout": () => {
            $('.button').css('background-color', 'white');
            $('.button').text('do you wanna enter?');
            $('.button').css('font-size', '50px');
        },

    })


$(document).on('click keydown' ,(e)=>{
    
    if(e.type === 'click'){ console.log(e.type) ;}
    if(e.type === 'keydown'){ /* キーが押されたときの処理 */ console.log(e.type) ;}
  });














});