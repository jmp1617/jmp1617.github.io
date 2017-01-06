$(document).ready(function() {
  var $sbody = $('.sbody');
  var isColapsed = false;
  $sbody.hide();
  $('.main').fadeTo(1000,1);
  $('.middle').hide().slideDown(1000);
  $('.links').hide().slideDown(1400);
  $('.profile').hide().slideDown(1800);
  $('.desc').hide().slideDown(2200);
  $('#name').effect('slide', 2200);
  $('.links').hover(
    function(){
      $('.icon').addClass('iconup');
    },
    function(){
      $('.icon').removeClass('iconup');
    }
  );
  $('.buttons').hover(
    function(){
      $('.button').addClass('iconup');
    },
    function(){
      $('.button').removeClass('iconup');
    }
  );
  $('.contact').hover(
    function(){
      $('.mailholder').addClass('iconup');
    },
    function(){
      $('.mailholder').removeClass('iconup');
    }
  );
  $('.interests').hover(
    function(){
      $('.dot1').addClass('iconup');
    },
    function(){
      $('.dot1').removeClass('iconup');
    }
  );
  $('.skills').hover(
    function(){
      $('.dot2').addClass('iconup');
    },
    function(){
      $('.dot2').removeClass('iconup');
    }
  );
  $('.aboutm').click(function(){
    if(isColapsed==false){
      $sbody.slideDown(2200);
      $('.sidepanel').fadeTo('slow',1);
      isColapsed = true;
    }
    else{
      $sbody.slideUp(200);
      $('.sidepanel').fadeTo(200,0);
      isColapsed = false;
    }
  });
  $(document).on('click', '.icon', function(){
    $(this).effect('bounce', 400);
  });
  $(document).on('click', '.button', function(){
    $(this).effect('bounce', 400);
  });
  $(document).on('click', '.mailholder', function(){
    $(this).effect('bounce', 400);
  });
});
