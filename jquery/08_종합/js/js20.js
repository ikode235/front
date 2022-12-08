
function banner(){
          $(".food:not(:animated)")
               .animate({marginLeft : parseInt($(".food").css("margin-left"))-240+"px"},"slow","swing", function(){
                    $(".food li:first").appendTo(".food");  // 맨앞 li를 맨 뒤로 이동
                    $(".food").css("margin-left", "-240px");
               });
}

$(document).ready(function(){

     var w = 240 * $(".food li").size() + "px";
     $(".food").css("width", w);
     $(".food li:last").prependTo(".food");
     $(".food").css("margin-left", "-240px");

     var banner = setInterval("banner()", 2000);

     $(".food li").mouseover(function(){
          clearInterval(banner);
          $(this).find("img").css("opacity","0.5");
          //alert("멈췄나요?");
     }).mouseout(function(){
          banner = setInterval("banner()", 2000);
          $(this).find("img").css("opacity","1.0");
     });
});