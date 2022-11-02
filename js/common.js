// $(document).ready(function(){}); //풀 코드
$(function(){ //축약형 코드

  $("nav ul li a,.back-to-top a,.footer-top a,.ani-btn").click(function(e){
    // console.log($(this.hash));
    var thisElem = $(this.hash);
    // console.log(thisElem.offset().top);
    // console.log($($(this).attr('href')));
    // console.log($($(this).attr('href')));
    // console.log(thisElem);
    $('html,body').stop();
    $('html,body').animate({scrollTop:thisElem.offset().top},1500);
    return false;
  });
  /*실습 :
  html,body의 scroll top 값이 0보다 클경우 back-to-top 요소를 노출하고 0일 경우 비 노출 구현*/
  // console.log($(window));
  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    let elem = $('.back-to-top');
    // if( $(this).scrollTop() == 0 ){
    //   elem.removeClass('on');
    // }else{
    //   elem.addClass('on');
    // };
    /*조건문 ? true : false;*/
    $(this).scrollTop() == 0 ? elem.removeClass('on') : elem.addClass('on');
  });

  /*section offset top값으로 class 추가*/
  let wHeight = $(window).height();
  // console.log(wHeight);
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    // console.log(thisScrollTop);
    $('section').each(function(){
      let thisOffset = $(this).offset();
      console.log('section offset top:'+thisOffset.top+', window scroll top:'+thisScrollTop);
      if( thisOffset.top <= thisScrollTop + 250 && thisOffset.top + wHeight >= thisScrollTop + 250 ){
        $(this).addClass('active');
      }
    });
  });

});








//
