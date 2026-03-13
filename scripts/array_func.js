//array_func.js
//여러개의 값을 변수에 저장할 수 있는 배열
//특정 동일 주제에 묶인 2개 이상의 값을 배열로 묶음.

//배열 사용안한 경우
const month = '월';
const tue = '화';
console.log(month, tue);

//배열 사용한 경우
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil[4]); //배열값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이(length) 속성

console.log('---------------------------------------------------------------');
//배열 기초1.
//원하는 색상을 자유롭게 6개 배열로 저장하고
//그중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const color = ['rgb(0,0,0)', 'rgb(255,255,255)', 'rgb(84,4,4) ', 'rgb(51,0,0)', 'rgb(86,121,121)', 'rgb(204,200,210)'];
console.log(`${color.length}개의 색깔 중 내가 제일 좋아하는 색의 RGB코드는 ${color[4]}입니다.`);
console.log('---------------------------------------------------------------');
//배열 생성법 2.
//new Array() 내장함수 선언법

let wh = new Array(2); //빈 배열위치 2자리 생성. 숫자2대입 아님!
console.log(wh);
wh[0] = 100;
console.log(wh);
wh[1] = 50;
console.log(wh);
console.log('---------------------------------------------------------------');
//신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈배열 2개 준비
//colorSize[0] = prompt('pink, white 중 하나를 선택하세요.');
//colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요');
colorSize[0] = 'pink';
colorSize[1] = 230;
let order = `주문옵션 : 색상: ${colorSize[0]}, 사이즈: ${colorSize[1]}`;
console.log(order);
console.log('---------------------------------------------------------------');
//의류 쇼핑몰 선택옵션 배열로 만들기
//사이즈 : S M L
//색상 : 화이트, 블랙, 그레이
//추가상품 : 양말, 손수건, 추가없음
let shopArr = new Array(3); 
//shopArr[0] = prompt('사이즈 S M L 중 하나를 선택하세요.');
//shopArr[1] = prompt('색상 화이트, 블랙, 그레이 중 하나를 선택하세요.');
//shopArr[2] = prompt('추가상품 양말, 손수건 중 하나를 선택하세요.');
shopArr[0] = '사이즈 S';
shopArr[1] = '화이트';
shopArr[2] = '양말';
order = `주문옵션 : 사이즈 :${shopArr[0]}, 컬러 : ${shopArr[1]}, 추가상품 : ${shopArr[2]}`
console.log(order);
console.log('---------------------------------------------------------------');
//배열과 사용자정의함수
//날씨소식앱 만들기
//출력예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
//출력예시 2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
//출력예시 3) 오늘은 눈, 내일은 맑음 소식이 있습니다.

//날씨 상태를 저장한 배열
const weatherArr = ['맑음', '비', '눈', '흐림']

//함수 실행시마다 다른 데이터를 전달하는 매개변수

//함수 호출
weatherFunc(0,1);
weatherFunc(3,2);
weatherFunc(2,0);

function weatherFunc(today=0, tomorrow=0){
    let msg = `오늘은 ${weatherArr[today]}, 내일은 ${weatherArr[tomorrow]} 소식이 있습니다.`;
    console.log(msg);
};
console.log('---------------------------------------------------------------');
//영화 좌석 예매 배열+함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 -> 2명시 20,000원 출력
let cgvSeat = new Array(3);
cgvSeat[0] = 'A1';
cgvSeat[1] = 'A2';
cgvSeat[2] = 'A3';
const price = 10000;

//함수호출
cgvFunc(cgvSeat[0], cgvSeat[1], price*cgvSeat.length);

function cgvFunc(seat1, seat2, won){
    let movie= `일반 2명 예약한 좌석은 ${seat1}, ${seat2}이고, `;
    movie += `결제 가격은 ${won.toLocaleString('ko-kr')}원입니다.`
    console.log(movie);
};
console.log('---------------------------------------------------------------');
//구구단 함수
//아래 함수를 활용하여 매개변수 추가와 함께 2~9단까지 출력할 수 있는 함수만들기

//함수호출
dan99(2); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(3);
dan99(4);

function dan99(danSu){ //danSu 매개변수를 생성(호출 시 대입받는 값을 받는 위치)
    let dan = '';
    dan += `${danSu}x1=${danSu*1}`; //danSu 호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${danSu}x2=${danSu*2}`;
    dan += `${danSu}x3=${danSu*3}`;
    dan += `${danSu}x4=${danSu*4}`;
    dan += `${danSu}x5=${danSu*5}`;
    dan += `${danSu}x6=${danSu*6}`;
    dan += `${danSu}x7=${danSu*7}`;
    dan += `${danSu}x8=${danSu*8}`;
    dan += `${danSu}x9=${danSu*9}`;
    console.log(dan);
}