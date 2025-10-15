$(document).ready(function(){
  $('.close').on('click',function(){
    $('.fix_banner').slideUp(300);
  });

  $('.tab').find('li').on('click',function(){
    $('.on').removeClass('on');
    $('.banner_wrap').removeClass('on');
     $(this).addClass('on');
     $('.'+$(this).attr('data-tab')).addClass('on');
  });

  var timer1 = 0;
  function runSlide1(){

    timer1 = window.setInterval(function(){
      $('.banner1').animate({marginLeft:'0'},300,function(){
        $(this).find('li:last-child').prependTo(this);
        $(this).css('marginLeft','-680px');
      });/*banner end*/
    },3000);/* interval end*/
  }
  runSlide1();

  $('.banner1').on('mouseenter',function(){
    clearInterval(timer1);
  }).on('mouseleave',function(){
    runSlide1();
  });/*banner_wrap end*/

  $('#pause').on('mousedown', function(){
    $(this).toggleClass('stop_run');
    if($(this).hasClass('stop_run')){
      clearInterval(timer1);
      $(this).find('img').attr('src','img/4.png');
    }else{
      runSlide1();
      $(this).find('img').attr('src','img/2.png');
    }
  });

  $('#prev').on('click',function(){
    clearInterval(timer1);
   $('.banner1').stop(true).animate({marginLeft:'-1360px'},300,function(){
    $(this).find('li:first-child').appendTo(this);
    $(this).css('marginLeft','-680px');
  });/*duration function*/
  runSlide1();
 });/*prev end */

 $('#next').on('click',function(){
   clearInterval(timer1);
    $('.banner1').stop(true).animate({marginLeft:'0'},300,function(){
      $(this).find('li:last-child').prependTo(this);
      $(this).css('marginLeft','-680px');
    });
    runSlide1();
  });/*next end*/



  var timer2 = 0;
  function runSlide2(){

    timer2 = window.setInterval(function(){
      $('.banner2').animate({marginLeft:'0'},300,function(){
        $(this).find('li:last-child').prependTo(this);
        $(this).css('marginLeft','-680px');
      });/*banner end*/
    },3000);/* interval end*/
  }
  runSlide2();

  $('.banner2').on('mouseenter',function(){
    clearInterval(timer2);
  }).on('mouseleave',function(){
    runSlide2();
  });/*banner_wrap end*/

  $('#pausee').on('mousedown', function(){
    $(this).toggleClass('stop_run');
    if($(this).hasClass('stop_run')){
      clearInterval(timer2);
      $(this).find('img').attr('src','img/4.png');
    }else{
      runSlide2();
      $(this).find('img').attr('src','img/2.png');
    }
  });

  $('#prevv').on('click',function(){
    clearInterval(timer2);
   $('.banner2').stop(true).animate({marginLeft:'-1360px'},300,function(){
    $(this).find('li:first-child').appendTo(this);
    $(this).css('marginLeft','-680px');
  });/*duration function*/
  runSlide2();
 });/*prev end */

 $('#nextt').on('click',function(){
   clearInterval(timer2);
    $('.banner2').stop(true).animate({marginLeft:'0'},300,function(){
      $(this).find('li:last-child').prependTo(this);
      $(this).css('marginLeft','-360px');
    });
    runSlide2();
  });/*next end*/


  var timer3 = 0;
  function runSlide3(){

    timer3 = window.setInterval(function(){
      $('.f_banner').animate({marginLeft:'0'},500,function(){
        $(this).find('li:last-child').prependTo(this);
        $(this).css('marginLeft','-403px');
      });/*banner end*/
    },4000);/* interval end*/
  }
  runSlide3();

  $('#pause3').on('mousedown', function(){
    $(this).toggleClass('stop_run');
    if($(this).hasClass('stop_run')){
      clearInterval(timer3);
      $(this).find('img').attr('src','img/f_bu_4.jpg');
    }else{
      runSlide3();
      $(this).find('img').attr('src','img/f_bu_2.jpg');
    }
  });

  $('#prev3').on('click',function(){
    clearInterval(timer3);
   $('.f_banner').stop(true).animate({marginLeft:'-806px'},500,function(){
    $(this).find('li:first-child').appendTo(this);
    $(this).css('marginLeft','-403px');
  });/*duration function*/
  runSlide3();
 });/*prev end */

 $('#next3').on('click',function(){
   clearInterval(timer3);
    $('.f_banner').stop(true).animate({marginLeft:'0'},500,function(){
      $(this).find('li:last-child').prependTo(this);
      $(this).css('marginLeft','-403px');
    });
    runSlide3();
  });/*next end*/

  $('.news>li').on('mouseenter',function(){
    var figure = $(this).find('a').find('.img_wrap').find('img:first-child');
   $(figure).stop(true).animate({width:'284px'},200);
  });
  $('.news>li').on('mouseleave',function(){
    var figure = $(this).find('a').find('.img_wrap').find('img:first-child');
   $(figure).stop(true).animate({width:'274px'},200);
  });

  $('.media').on('mouseenter',function(){
    var figure = $(this).find('a').find('.img_wrap2').find('img');
   $(figure).stop(true).animate({width:'282px'},200);
  });
  $('.media').on('mouseleave',function(){
    var figure = $(this).find('a').find('.img_wrap2').find('img');
   $(figure).stop(true).animate({width:'262px'},200);
  });

});/*document end*/
