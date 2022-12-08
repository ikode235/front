$(document).ready(function(){
     // 모달태그 추가
     $("body").append("<div id='layer'></div>");

     // 로그인, 모달태그
     $("#login, #layer").hide();

     // 개인로그인
     $("#quick li:nth-child(2) a").click(function(){
          //$("#login, #layer").show();
          $("#login, #layer").fadeIn();
     });

     // 닫기
     $(".close_login").click(function(){
          $("#login, #layer").fadeOut();  // hide
     });

     // 빠른메뉴 / 개인로그인 / 기업로그인
     $("#quick li:nth-child(1) a").addClass("sel");
     $("#quick li a").click(function(){
          $("#quick li a").removeClass("sel");
          $(this).addClass("sel");
     });

     // 빠른메뉴
     $("#q1_menu").hide();
     $("#quick li:nth-child(1) a").click(function(){
          $("#q1_menu").fadeIn();
     });

     // 빠른메뉴 닫기
     $(".close_btn a").click(function(){
          $("#q1_menu").fadeOut();
     });
});