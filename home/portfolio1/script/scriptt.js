
  $(document).ready(function(){

    $('.btn').on('click',function(){
      $('.review').slideUp(300);
    });

    $('.con').on('mouseenter',function(){
      var figure = $(this).find('a').find('.img_wrap').find('img');
     $(figure).stop(true).animate({width:'258px'},200);
    });
    $('.con').on('mouseleave',function(){
      var figure = $(this).find('a').find('.img_wrap').find('img');
     $(figure).stop(true).animate({width:'244px'},200);
    });


  });/*document end*/
