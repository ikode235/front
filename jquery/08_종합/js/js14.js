$(document).ready(function(){

     // 태그 추가
     $("#main_navi").before("<div class='bg'></div>")

     //
     $(".bg, .sub").hide();
     $("#menu").mouseenter(function(){
          $(".bg, .sub").stop().slideDown("fast");
     }).mouseleave(function(){
          $(".bg, .sub").stop().slideUp("fast");
     });

     $(".bg").mouseover(function(){
          $(this).stop().show();
          $(".sub").stop().show();
     }).mouseout(function(){
          $(this).stop().slideUp();
          $(".sub").stop().slideUp();
     });

     // 이미지 변경
     $("#menu > li").hover(function(){
          var bgImg = $(this).attr("data-n");
          $(".bg").css("background-image", "url(images/hybg" + bgImg + ".jpg)");
     });

     //Languages 내용 보이기 / 숨기기
     $(".lang_li > ul").hide();
     var show = false;
     $(".lang_li").click(function(){
          show = !show;
          if(show == true){  //  -> 이렇게 써도 됨 ->  if(show)
               // $(".lang_li > ul").show();
               $(".lang_li").children("ul").show();
               $(".lang_li > a").css("color","red");
               $(".lang_li > span").text("▲").css("color","red");
               
          }else{
               $(".lang_li").children("ul").hide();
               $(".lang_li > a").css("color","");
               $(".lang_li > span").text("▼").css("color","");
          }
     });
});