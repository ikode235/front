$(document).ready(function(){

     // #notice li 개수
     var w = 320 * $("#notice li").size() + "px"; // .size   selector 개수
     //var w = 320 * $("#notice li").length + "px";  / -> 이 방법도 됨
     $("#notice").css("width", w);
     //console.log(w);  // 320 * 6 = 1920px
     $("#notice li:last").prependTo("#notice");  // notice 안에서 맨 앞으로 이동해라(prependTo), 마지막 li를
     $("#notice").css("margin-left", "-320px");

     $(".prev_btn").click(function(){  // <
          $("#notice:not(:animated)")
               .animate({marginLeft : parseInt($("#notice").css("margin-left"))-320+"px"},"slow","swing", function(){
                    $("#notice li:first").appendTo("#notice");  // 맨앞 li를 맨 뒤로 이동
                    $("#notice").css("margin-left", "-320px");
               });
     });

     $(".next_btn").click(function(){  // >
          $("#notice:not(:animated)")
               .animate({marginLeft : parseInt($("#notice").css("margin-left"))+320+"px"},"slow","swing", function(){
                    $("#notice li:last").prependTo("#notice");  // 맨앞 li를 맨 뒤로 이동
                    $("#notice").css("margin-left", "-320px");
               });
     });
});