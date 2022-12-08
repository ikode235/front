// 1
function ok(){
    alert("그렇군요");
}
function no(){
    alert("네!~~");
}

// 2
function list1(i){
    if(i=='웹표준'){
        alert('웹표준 입니다.');
    }else if(i=='html5'){
        alert('html5 입니다.');
    }else{
        alert('javascript 입니다.');
    }
}

// 3
function q(){
    var ans = document.getElementById("ans_r").value;
    if(ans == ""){ // 내용이 없으면, 비어있으면
        alert('입력하세요');
        document.getElementById("ans_r").focus();  // 커서
    }else if(ans == 'a' || ans == 'A'){  // || -> or , && -> and
        alert('정답입니다');
    }else{
        alert('틀렸어요... 다시 입력해주세요');
        document.getElementById("ans_r").value = "";  // 초기화
        document.getElementById("ans_r").focus();  // 커서
    }
}