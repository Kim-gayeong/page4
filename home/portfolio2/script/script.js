$(document).ready(function(){

  $('.gnb').stop(true).on('mouseenter',function(){
    $('.sub').slideDown(500);
  });
 $('.sub').stop(true).on('mouseleave',function(){
      $(this).slideUp(500);
  });/*gnb end*/

  var here = 0;
  var timer = 0;
  var duration = 500;
  var $slideList = $ ('.banner > li');
  var slideLength = $slideList.length;

  runSlide();
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
          if (here >= 4)here = 0;
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
      if (here >= 4)here = 0;
      $('.bullet > li').removeClass('on')
       .eq(here).addClass('on');

    $('.banner').animate({marginLeft:'-200%'},duration, function(){
      $(this).find('li:first-child').appendTo(this);
      $(this).css('marginLeft','-100%');
    });/*animate end*/
  },8000);
  }/*runSlide end*/
  $('.banner').on('mouseenter',function(){
    clearInterval(timer);})
  .on('mouseleave',function(){
    runSlide();
  });



  var $main = $('#contents2');
  $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop()-'100';
      $main.css('background-position', 'center ' + Math.floor(scrollTop/(-5)) + 'px');
  });

 $('.con').stop(true).on('mouseenter',function(){
   $(this).find('a').find('p').find('span').animate({color:'#fff'},300);
 })
 .stop(true).on('mouseleave',function(){
  $(this).find('a').find('p').find('span').animate({color:'#333'},300);
 });


 $('.bullet2').find('li').on('click',function(){ //그냥 tab아니고 li
   $('.on2').removeClass('on2');
   $('img_box').removeClass('on2'); //같은 이름의 on 이건 처음부터 안 씀.
    $(this).addClass('on2');
    $('.'+$(this).attr('data-tab')).addClass('on2');// 클릭(선택)한 li가 "div의 클래스"로 불려진 것 \따옴표 삭제해야함 +손잡고다녀라
 });

 $('figcaption').on('click',function(){
   $('.popup_wrap').fadeOut(0);
 });/*button end*/

   });/*document end*/
