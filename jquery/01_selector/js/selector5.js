$(document).ready(function(){
     // :hidden
     // 숨겨져 있는 p요소를 3초동안 화면에 보이게 하라
     $("#ex1 p:hidden").show(3000);  //웹접근성2

     // :visible
     // 화면에 보이는 p요소를 2초동안 숨겨라
     $("#ex1 p:visible").hide(2000);
});

// ex2
// 3초 후에 show()를 한번만 실행해라
function show(){
     $(".none_img:hidden").show(5000);  // 숨긴 이미지
     $("#photo img:first").hide(3000);  // 첫번째 이미지
     $("#photo img:first").show("fast");  // 
}
setTimeout("show()", 3000);