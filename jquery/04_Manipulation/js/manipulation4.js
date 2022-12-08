$(document).ready(function(){
     // ex1
     $(".btn1_1").click(function(){  // <
          // 맨처음 이미지를 .photo1 안에서 맨뒤로 이동
          $(".photo1 img:first").appendTo($(".photo1"));
     });
     $(".btn1_2").click(function(){  // <
          // 맨마지막 이미지를 .photo1 안에서 맨앞으로 이동
          $(".photo1 img:last").prependTo($(".photo1"));
     });


     // ex2
     $(".btn2_1, .btn2_2").hide();
     $("#ex2").mouseover(function(){  // 마우스 올려서 이벤트 뜨게 할때 안될 때가 있음. 그 상위? 로 묶어서 해보기.
          $(".btn2_1, .btn2_2").show();
     }).mouseout(function(){
          $(".btn2_1, .btn2_2").hide();
     });


     $(".btn2_1").click(function(){  // <
          // 맨처음 이미지를 .photo2 안에서 맨뒤로 이동
          $(".photo2 img:first").appendTo($(".photo2"));
     });
     $(".btn2_2").click(function(){  // <
          // 맨마지막 이미지를 .photo2 안에서 맨앞으로 이동
          $(".photo2 img:last").prependTo($(".photo2"));
     });
});