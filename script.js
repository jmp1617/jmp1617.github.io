$(document).ready(function() {
  var $sbody = $('.sbody');
  var $projects = $('#projects')
  var $aboutpanel = $('#aboutpanel')
  var isColapsed = false;
  var isColapsedp = false;
  $sbody.hide();
  $('.main').fadeTo(1000,1);
  $('.middle').hide().slideDown(1000);
  $('#name').effect('slide', 1000);

  $('.links').hover(
    function(){
      $('.icon').addClass('iconhalf');
    },
    function(){
      $('.icon').removeClass('iconhalf');
    }
  );

  $('.icon').hover(
    function(){
      $(this).removeClass('iconhalf');
      $(this).addClass('iconup');
    },
    function(){
      $(this).removeClass('iconup');
      $(this).addClass('iconhalf')
    }
  );

  $('.buttons').hover(
    function(){
      $('.button').addClass('iconhalf');
    },
    function(){
      $('.button').removeClass('iconhalf');
    }
  );

  $('.button').hover(
    function(){
      $(this).removeClass('iconhalf');
      $(this).addClass('iconup');
    },
    function(){
      $(this).removeClass('iconup');
      $(this).addClass('iconhalf')
    }
  );

  $('.pbody').hover(
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

  $('#aboutm').click(function(){
    if(isColapsed==false){
      $aboutpanel.fadeTo('slow',1);
      isColapsed = true;
    }
    else{
      $aboutpanel.slideUp(200);
      $aboutpanel.fadeTo(200,0);
      isColapsed = false;
    }
  });

  $('#projb').click(function(){
    if(isColapsedp==false){
      $projects.fadeTo('slow',1);
      isColapsedp = true;
    }
    else{
      $projects.slideUp(200);
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
  $('.contact').hover(
    function(){
      $('.mailholder').addClass('iconhalf');
    },
    function(){
      $('.mailholder').removeClass('iconhalf');
    }
  );
  $('.ptype').click(function(){
    $('#tempcomesoon').fadeTo('slow', 1);
  })
});
