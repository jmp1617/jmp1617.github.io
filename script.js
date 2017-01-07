$(document).ready(function() {
  var $sbody = $('.sbody');
  var $projects = $('#projects')
  var isColapsed = false;
  var isColapsedp = false;
  $sbody.hide();
  $('.main').fadeTo(1000,1);
  $('.middle').hide().slideDown(1000);
  $('#name').effect('slide', 1000);
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
  $('#pbody').hover(
    function(){
      $('.ptype').addClass('iconhalf');
    },
    function(){
      $('.ptype').removeClass('iconhalf');
    }
  );
  $('.ptype').hover(
    function(){
      $(this).removeClass('iconhalf');
      $(this).addClass('iconup');
    },
    function(){
      $(this).removeClass('iconup');
      $(this).addClass('iconhalf');
    }
  );
  $('.aboutm').click(function(){
    if(isColapsed==false){
      $sbody.slideDown(1200);
      $('.sidepanel').fadeTo('slow',1);
      isColapsed = true;
    }
    else{
      $sbody.slideUp(200);
      $('.sidepanel').fadeTo(200,0);
      isColapsed = false;
    }
  });
  $('.projb').click(function(){
    if(isColapsedp==false){
      $projects.fadeTo('slow',1);
      isColapsedp = true;
    }
    else{
      $projects.fadeTo(200,0);
      isColapsedp = false;
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
  $(document).on('click', '.ptype', function(){
    $(this).effect('highlight', {color:'white'}, 400);
  });
});
