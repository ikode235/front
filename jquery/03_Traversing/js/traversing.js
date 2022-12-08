$(document).ready(function(){
     // .first()
     //$("#main1 p").first().css("background-color", "#cccccc");  // middle2의 p
     //$("#main1 p:first").css("background-color", "#cccccc");  // middle2의 p
     //$("#main1 > p").first().css("background-color", "#ffcc33");  // p1

     // .last()
     //$("#main1 p").last().css("background-color", "#ffcc33");  // sub1의 p

     // .eq()
     //$("#main1 p").eq(2).css("background-color", "#ffcc33");  // p2

     // .filter()
     //$("#main1 div").filter(".middle2").text("middle2 적용");  // middle2 div의 텍스트 변경
     //(그 안에 p태그 있었던거 없어진다는데 왜인지는 이해가 안감.ㅠ)

     // .not()
     //$("#main1 div").not("#sub1").hide();  // sub1만 제외하고 모든 div 숨기기

     // .slice
     $("#slice1 p").slice(1,5).css("background-color", "#ff99ff");  // 2 ~ 5
     $("#slice1 p").slice(2).css({"border-width" : "4px", " border-color" : "cc0033"});  // 3 ~ 10 (3부터 끝까지)
     $("#slice1 p").slice(-5).css("background-color", "green");  // 6 ~ 10  (끝에서 5개)

     // .find()
     //$("#main2").find("p").css("background-color", "#ff99ff");  // box2의 p, p1, p2

     // .children()
     //$("#main2").children("p").css("background-color", "#ff9900");  // box2의 p1, p2

     //.closest()
     //$("p.txt2").closest("div").css("background-color", "#ff9900");
     $("p.txt2").closest("#main2").css("background-color", "#ff9900");

     // .prev()
     //$("p.txt3").prev().css("background-color", "#ff9900");  // p2

     // .prevAll()
     //$("p.txt3").prevAll().css("background-color", "#ff9900");  // div, p1, p2

     // .next()
     //$("p.part3").next().css("background-color", "#ff9900");  // p2

     // .nextAll()
     //$("p.part3").nextAll().css("background-color", "#ff9900");  // p2, p3

     // .siblings()
     $("p.part3").siblings().css("background-color", "#ff9900");  // div, p2, p3

     // .nextUntil()
     //$("#main4 h2").nextUntil("#main4 h5").css({"color" : "#cc0033", "border" : "2px solid #cc0033"});  // h3,h4

     // .parent()
     //$("#main4 span").parent().css({"color" : "#cc0033", "border" : "2px solid #cc0033"});  // #main4
     //$("#main5 span").parent().css({"color" : "orange", "border" : "2px solid orange"});  // li

     // .parents()
     //$("#main5 span").parents().css({"color" : "orange", "border" : "2px solid orange"});  // 상위 전체
     //$("#main5 span").parents("ul").css({"color" : "orange", "border" : "2px solid orange"});  // 상위 ul
     //$("#main5 span").parents("div").css({"color" : "orange", "border" : "2px solid orange"});  // 상위 div

     // .parentsUntil()
     $("#main5 span").parentsUntil("div").css({"color" : "orange", "border" : "2px solid orange"});  // ul, li, p

     // .add()
     $(".btn1").click(function(){  // 확인1
          $("#main6 div").css("background-color", "#ff9933");
     });
     $(".btn2").click(function(){  // 확인2
          $("#main6 div").add("#main6 span").css("background-color", "#ff9933");  // div + span 에 적용
     });
     $(".btn3").click(function(){  // 확인3
          $("#main6 div").add("#main6 span").add("#main6 p").css("background-color", "#ff9933");  // div + span + p 에 적용
     });
});