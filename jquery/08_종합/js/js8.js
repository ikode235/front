$(document).ready(function(){
     // ex1
     // $(selector).prop() selector의 속성
     // $(selector).attr() selector의 속성

     $(".btn1_1").click(function(){  // prop
          var a = $(".ex1 a").prop("href");
          alert(a);  // http://m.naver.com
     });
     $(".btn1_2").click(function(){
          var b = $(".ex1 a").prop("href");
          alert(b);  // http://m.naver.com
     });
     $(".btn2_1").click(function(){
          var c = $(".ex2 input:nth-child(1)").prop("checked");
          alert(c);  // 체크 true, 해제 false
     });
     $(".btn2_2").click(function(){
          var d = $(".ex2 input:nth-child(1)").attr("checked");
          alert(d);  // 체크 checked, 해제 checked
     });


     // wrap2
     // 전체선택/전체해제
     $("#chk1").change(function(){  // 변경
          var chk1 = $("#chk1").prop("checked");
          if(chk1 == true){  // 전체선택에 체크가 true 값이면
               $("#chk2, #chk3").prop("checked", true);  // 밑에것들도 체크 true 되게해라!
               $(".type01").addClass("checked");
          }else{
               $("#chk2, #chk3").prop("checked", false);  //  false이면 밑에도 false 해라
               $(".type01").removeClass("checked");
          }
     });

     // - 개인정보처리방침(선택)/개인정보 제3자 제공 동의(선택)
     $("#chk2, #chk3").change(function(){
          var chk2 = $("#chk2").prop("checked");
          var chk3 = $("#chk3").prop("checked");
          if(chk2 == true){  // 개인정보처리방침(선택)
               $(".type03").addClass("checked");
          }else{
               $(".type03").removeClass("checked");
          }
          if(chk3 == true){  // 개인정보 제3자 제공 동의(선택)
               $(".type04").addClass("checked");
          }else{
               $(".type04").removeClass("checked");
          }
          if(chk2 == true && chk3 == true){  // 전체선택
               $(".type02").addClass("checked");
          }else{
               $(".type02").removeClass("checked");
          }
     });
});