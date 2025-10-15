$(document).ready(function(){
  $('.close').on('click',function(){
    $('.fix_banner').slideUp(300);
  });
  $('.title').on('mouseenter', function(){
    $('.sub1').slideDown(200);
 }).on('mouseleave',function(){
     $('.sub1').slideUp(200);
 });
 $('.sub1').on('mouseleave', function(){
  $('.sub1').stop(true).slideUp(200);
 });

$('.title2').on('click',function(){
  var $this = $(this);
  $this.toggleClass('open');
  if($this.hasClass('open')){
   $this.find('.sub').slideDown(200);
   $this.find('a').find('img').attr('src','img/cl.png');
  }else{
    $(this).find('.sub').slideUp(200);
    $this.find('a').find('img').attr('src','img/op.png');
  }
});
});/*document end*/
