$(document).ready(function(){
     // :first-child
     //$("#ex1 ul li:first-child").css("background-color", "#cccc66");  // 1, 6
     //$("#ex1 .list1 li:first-child").css("background-color", "pink");  // 1
     //$("#ex1 .list1 li:first").css("background-color", "pink");  // 1

     // :last-child
     //$("#ex1 ul li:last-child").css("background-color", "#cccc66");  // 5, 10

     // :nth-child()
     //$("#ex1 ul li:nth-child(4)").css("background-color", "#cccc66");  // 4, 9
     //$("#ex1 ul li:nth-child(even)").css("background-color", "#cccc66");  // 2, 4   7,9
     //$("#ex1 ul li:nth-child(odd)").css("background-color", "#cccc66");  // 1, 3, 5   6, 8, 10
     //$("#ex1 ul li:nth-child(2n)").css("background-color", "#cccc66");  // 2, 4   7, 9



     // ex2
     //1) 번호, 담당자, 비고 (글자색 #cc66ff)
     $("#web tr th:nth-child(odd)").css("color", "#cc66ff");

     //2) 과목, 전화번호 (글자색 #66cc66)
     $("#web tr th:nth-child(even)").css("color", "#66cc66");

     //3) 1, 3, 5, 7, 9번 행 전체 (배경색 #ff9999 글자색 #990099)
     $("#web tr:nth-child(even)")
          .css({"color" : "#990099", "background-color" : "#ff9999"});

     //4) 2, 4, 6, 8, 10번 행 전체 (배경색 #cc9933 글자색 #ff0066)
     $("#web tr:nth-child(odd):not(:first)").css({"background-color" : "#cc9933", "color" : "#ff0066"});
     // or     $("#web tr:nth-child(2n+3)")    or   2개 각각 넣기

     //ex3
     //1) 첫번째 p텍스트 변경 -> 1번 이미지
     $("#photo p:first-child").text("1번 이미지");

     //2) 짝수 이미지만  border적용 (점선 2px 붉은색 계열)
     $("#photo p:nth-child(even)").css("border", "2px dotted red");

     //3) 4, 8 텍스트색 변경
     $("#photo p:nth-child(4n)").css("color", "purple");

     //4) 마지막 이미지의 크기를 3배로 커지게 변경
     $("#photo p:last-child > img").css({"width" : "300%", "height" : "300%"});
     // or    $("#photo p:last-child > img").css({"width" : "transform", "scale(3)"}); 
     
     //5) 6번에서 이미지만 숨기기
     $("#photo p:nth-child(6) > img").css("display", "none");
     // or     $("#photo p:nth-child(6) > img").hide();
});