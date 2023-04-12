//For page black and white
$(document).ready(function($){
    $('.black-white').on('click',function(){
      if($("html").attr('data-click-state') == 1) {
          $("html").attr('data-click-state', 0);
          $("html").css('filter', 'grayscale(0)')
        }
      else {
        $("html").attr('data-click-state', 1);
        $("html").css('filter', 'grayscale(1)')
      }
    });
  });