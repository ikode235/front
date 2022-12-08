$(document).ready(function(){
     // :eq()
     //$("#ex1 p:eq(1)").css("border", "1px solid #ff6666");  // 내용 p2에 적용됨. 
     //$("#ex2 ul li:eq(0)").css("background-color", "#ff9966");  // li1
     //$("#ex2 ul li:eq(5)").css("background-color", "#ff9966");  // li6    -> 이거 헷갈릴 수 있음.  ul이 두개인데 합쳐져서 그 안에 li 순서로 적용됨.
     //$("#ex2 .list2 li:eq(0)").css("background-color", "#ff9966");  //li6

     // :gt()
     //$("#ex2 ul li:gt(4)").css("background-color", "orange");  // li6 li7 li8 li9 li10

     // :li()
     //$("#ex2 ul li:lt(3)").css("background-color", "pink");  //  li1 li2 li3

     // :first      :last
     //$("#ex2 ul li:first").css("background-color", "pink");  // li1
     //$("#ex2 ul li:last").css("background-color", "orange");  // li10

     // :even       :odd
     //$("#ex2 ul li:even").css("background-color", "pink");  // 
     //$("#ex2 ul li:odd").text("홀수번째 li").css("color", "red");  // li1

     // :not
     // 첫번째 li제외하고 배경색, 글자색
     //$("#ex2 ul li:not(:first)").css({backgroundColor : "#d8d8a2", color : "#ea1eea"});

     // :header
     $("#ex1 :header").css("text-decoration", "underline");  // 제목 h1, 제목 h2
     $("section *:header").text("header 테스트").css("color", "#6666ff");

     // :root
     $(":root").css("border", "1px solid #ff66cc");

     // :lang()
     $("#ex3 p:lang(en)").css("background-color", "yellow");


     // gallery
     // 1) 마지막번째 li  화면에서 숨기기
     //$("#gallery ol li:last").css({"display" : "none"});

     // 2) (3)번 제외한 li 숨기기
     //$("#gallery ol li:not(:eq(2))").css({"display" : "none"});

     // 3) (2, 4, 6, 8, 10)번 제외한 li  숨기기
     //$("#gallery ol li:not(:odd)").css({"display" : "none"});

     // 4) (1, 2,  3, 4)번 li  숨기기
     //$("#gallery ol li:lt(4)").css({"display" : "none"});
     
     // 5) (7, 8, 9, 10)번 li  숨기기
     //$("#gallery ol li:gt(5)").css({"display" : "none"});
})