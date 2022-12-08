$(document).ready(function(){

  // ex1
  $(".ex1_i").hover(function(){  // a
     $(".img1").eq(1).stop().animate({"opacity" : "0"},500);  // 확대된 사진을 뒤에 숨기고 앞에 있는 사진을 투명화해서 앞으로 튀어나오는 것처럼 만드는거임.
  },function(){
     $(".img1", this).eq(1).stop().animate({"opacity" : "1"},500);
  });



  // ex2
  var ex2 = setInterval(function(){
       $(".ex2_i img").animate({"top" : "-20px"},1500);
       $(".ex2_i img").animate({"top" : "0"},1500);
  },1000);



  // ex3
  var ex3 = setInterval(function(){
     $(".ex3_i img").delay(300).animate({"top" : "50px"},1500, "easeOutBounce");
     $(".ex3_i img").delay(2000).animate({"top" : "0"},1500, "easeOutBounce");
},1000);



  // ex4
  banner6();
  function banner6(){
     $("#ba0").delay(2500).animate({left : "-500px"},1000);  // 1번 이미지
     $("#ba1").delay(2500).css({"display" : "block", "left" : "500px"})
                    .animate({left : 0}, 1000, function(){
                         $(this).delay(2500).animate({left : "-500px"},1000);  // 2번 이미지
     $("#ba2").delay(2500).css({"display" : "block", "left" : "500px"})
                    .animate({left : 0}, 1000, function(){
                         $(this).delay(2500).animate({left : "-500px"},1000); // 3번 이미지
     $("#ba0").delay(2500).css({left : "500px"},1000)  // 1번 이미지
                    .animate({left : 0},1000, banner6);
               });
          });
  }
});