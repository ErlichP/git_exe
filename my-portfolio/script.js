$(document).ready(function(){
    $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('header').toggleClass('toggle');
    });
    $(window).on('scrooll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
        });
    });
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventdefault();
        $('html,body').animate({
scrollTop: $($(this).attr('href')).offset().top,
        
        },
        500,
        'linear'
        );
    });


