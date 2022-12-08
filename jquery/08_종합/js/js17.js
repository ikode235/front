$(document).ready(function(){
     // img_wrap
     var img_fade = setInterval(function(){
          var showImg = $("#img_wrap p:eq(0)");
          var nextImg = $("#img_wrap p:eq(1)");
          nextImg.addClass("selected");  // $("#img_wrap p:eq(1)").addClass("selected");
          nextImg.css("opacity","0").animate({opacity : 1},1000,function(){
               showImg.appendTo("#img_wrap").removeClass("selected"); // appendTo(img_wrap) -> img_wrap 안에서. 그 뒤는  클래스를 빼라는 뜻. 왜냐면 z-index가 들어가 있으니까!!!
          })
     },3000);
});