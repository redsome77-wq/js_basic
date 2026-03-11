//function.js
//function 함수명(전달인자){반복실행내용;} : 특정 기능을 하는 구문을 묶어 재사용하는 문법

//반복함수 준비
function story1(){  //사용자정의함수
    story2(); //콜백함수
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; // += : 기존이야기에 더하기
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}

function story2(){
    let b = '부모는 먹을 것이 없어';
    b += '계모가 아이들을 숲에 버리자고 제안한다'
    console.log(b);
}
//반복함수 실행(함수밖)
story1();
console.log('---------------------------------------------------------------------');
//카페 키오스크 함수
function kiosk(){
    let coffee = '키오스크 터치 ';
    coffee += '커피 메뉴 고르기 ';
    coffee += '옵션 메뉴 고르기 ';
    coffee += '결제버튼 누르기 ';
    coffee += '결제수단 선택하기 ';
    coffee += '결제 실행 ';
    coffee += '결제 성공 ';
    coffee += '영수증 출력 메시지 ';
    coffee += '주문완료';
    console.log(coffee);
}
kiosk(); //함수 선언 밖 함수 실행
