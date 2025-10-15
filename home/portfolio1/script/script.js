$(document).ready(function(){

  $('.btn').on('click',function(){
    $('.review').slideUp(300);
  });
  $('#banner_wrap').stop(true).on('mouseenter',function(){
    $('.button').fadeIn(300);
  }).stop(true).on('mouseleave',function(){
    $('.button').fadeOut(300);
  });
  $('.con').on('mouseenter',function(){
    var figure = $(this).find('a').find('.img_wrap').find('img');
   $(figure).stop(true).animate({width:'258px'},200);
  });
  $('.con').on('mouseleave',function(){
    var figure = $(this).find('a').find('.img_wrap').find('img');
   $(figure).stop(true).animate({width:'244px'},200);
  });

          var here = 0;
          var timer = 0;
          var duration = 300;
          var $slideList = $ ('.banner > li');
          var slideLength = $slideList.length;


          $slideList.each(function(index){
            $(this).attr('data-index',index);
          });

          $('.bullet > li').each(function(index){
            $(this).on('click',function(){
              window.clearInterval(timer);

              for (var i = 0; i < slideLength; i++){
               var $item = $('.banner > li:nth-child(1)');
                if ($item.attr('data-index')== index){
                  break;
                }else{
                  here++;
                  if (here >= 3)here = 0;
                  $item.appendTo('.banner');
                }
               }
               $('.bullet > li').removeClass('on')
                .eq(here).addClass('on');
            });
          });


          function runSlide(){
            timer= window. setInterval(function(){
              here++;
              if (here >= 3)here = 0;
              $('.bullet > li').removeClass('on')
               .eq(here).addClass('on');
            $('.banner').animate({marginLeft:'-200%'},duration, function(){
              $(this).find('li:first-child').appendTo(this);
              $(this).css('marginLeft','-100%');
            });/*animate end*/
          },5000);
          }/*runSlide end*/

          $('.banner').on('mouseenter',function(){
            clearInterval(timer);})
          .on('mouseleave',function(){
            runSlide();
          });

          $('.prev').on('click',function(){
            clearInterval(timer);
           $('.banner').stop(true).animate({marginLeft:'-200%'},300,function(){
            $(this).find('li:first-child').appendTo(this);
            $(this).css('marginLeft','-100%');
          });/*duration다음function*/
          $('.bullet > li').removeClass('on')
           .eq(here).addClass('on');
          runSlide();
         });/*prev end */
         $('.next').on('click',function(){
           clearInterval(timer);
            $('.banner').stop(true).animate({marginLeft:'0'},300,function(){
              $(this).find('li:last-child').prependTo(this);
              $(this).css('marginLeft','-100%');
            });
            $('.bullet > li').removeClass('on')
             .eq(here).addClass('on');
            runSlide();
          });/*next end*/

});/*document end*/
