$(document).ready(function(){
    //-----------------------------
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.d-menu').slideToggle();
    });
    //-----------------------------
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3500,
          },
      
       
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
      });
      //-----------------------------
       $('.mobile-menu-btn').click(function(){
         $('header').toggleClass('openmenu');
       });
       $('.mask').click(function(){
         $('header').removeClass('openmenu');
       });
});