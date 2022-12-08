$(document).ready(function(){
     // ex1
     $("#photo1 img").mouseover(function(){
          $(this).addClass("photo1_i");
     }).mouseout(function(){
          $(this).removeClass("photo1_i")
     });

     $("#photo2 img").hover(function(){
          $(this).toggleClass("photo2_i");  // mouseover 적용 X
     });

     // ex2
     $("#ex2 p:eq(0)").addClass("has1");
     $("#ex2 p:eq(0)").click(function(){
          if($("#ex2 p:eq(0)").hasClass("has1")){  // true  -> #ex2 어쩌구 저 자리에 has1이라는 클래스가 있으면  true 없으면  false.    여기서는  true
               alert("YEAH!!!!");
          }else{  // false
               alert("아니요!!");
          }
     });


     // ex3
     $(".menu3 li a:first").addClass("selected3");
     $(".menu3 li a").hover(function(){
          $(".menu3 li a").removeClass("selected3")  // 마우스 안올려가 있는 곳은 클래스 제거
          $(this).addClass("selected3");  // 마우스 올라와 있는 것만(this) 클래스 주기.
          $(".banner3 img").attr("src", $(this).attr("href"));
     }).click(function(){
          return false;
     });


     // ex4   -> 위에 ex3이랑 비슷한 결과인데 다른 방법
     $(".menu4 li a:first").addClass("selected4");
     $(".menu4 li a").bind("mouseover", function(){
          $(".menu4 li a").removeClass("selected4");
          $(this).addClass("selected4");
          var num = $(this).attr("data-num");
          $("#ex4").css("background-image", "url(images/main_" + num + ".jpg)");
     }).click(function(){
          return false;
     });
     

     // ex5
     $(".over5").hover(function(){  // a
          var img_roll5 = $(this).attr("href");
          $(".normal5", this).attr("src", img_roll5);   // -> this = a  -> a태그 안에 있는 normal5라고 생각하면 됨. 이렇게 부모(뒤에꺼)? 넣어줘야 제대로 나옴. 태그(img)로 쓰면 안먹음ㅠㅠ 클래스 주고 클래스명 넣기.
          var txt_roll5 = $(".tit",this).attr("data-tit1");
          $(".tit", this).text(txt_roll5);
     },function(){
          var img_out5 = $(".normal5", this).attr("data-num");
          $(".normal5", this).attr("src", "images/best" + img_out5 + ".png");
          var txt_out5 = $(".tit",this).attr("data-tit2");
          $(".tit", this).text(txt_out5);
     }).click(function(){
          return false;
     });
});