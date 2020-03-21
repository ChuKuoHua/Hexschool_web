$(document).ready(function() {
    var heart = false;
    $(window).scroll(function(event){
        var scrollVal=$(this).scrollTop();
        if(scrollVal >150){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    });
    /* top animate*/
    $('.top a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });
    /* heart Bookmark */
    $('.fa-heart').click(function(event) {
        if(!heart){
            $(this).addClass('active');
            heart = true;
        }else{
            $(this).removeClass('active');
            heart = false;
        }
    });
    // 打開右側選單
    $('.mobile-link').click(function(event) {
        $('body').addClass('open');
    });
    // 關閉右側選單
    $('.mobile-close').click(function(event) {
        $('body').removeClass('open');
    });
    /*text-toggle*/
    $(".fa-sort-down").click(function(){
        $(".Chef-content").fadeIn();
        $(".fa-sort-down").hide();
        $(".fa-sort-up").show();
    });
    $(".fa-sort-up").click(function(){
        $(".Chef-content").fadeOut();
        $(".fa-sort-down").show();
        $(".fa-sort-up").hide();
    });
    /* swiper */
    var swiper = new Swiper('.swiper-container', {
        slideNextClass:'feature-button-next',
        slidePrevClass:'feature-button-prev',
        navigation: { 
          nextEl: '.feature-button-next',
          prevEl: '.feature-button-prev',
        },
    }); 
    var swiper = new Swiper('.feeling-swiper-container', {
        pagination: { 
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });  

  });