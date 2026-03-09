// var_let_const.js
// 객체(제어 목적의 데이터), 속성(객체의 속성), 메서드(객체의 실행)
console.log(bowl); // 변수 정의되지 않음 undefined (error)
var bowl; //빈그릇상태
console.log(bowl); // 변수 정의되지 않음 undefined (error)
bowl = '밥'; // '',"" 따옴표로 묶인 문자 데이터를 변수에 대입
console.log(bowl);
bowl = '콩'; // '밥' 기존데이터 제거하고 '콩' 새로운 데이터 대입
console.log(bowl); // -> console 객체에 메서드log로 bowl변수를 실행

console.log('--------------------------------------------------');
/* 변수 a , b, c 대입연습 */
/* 1. 변수생성 */
var a;
var b;
var c;
console.log(a, b, c); //값이 정의되지않음*3 undefined
a = 1; //var 안쓴이유 -> 위에서 이미 선언됨 (var a;)
console.log(a); // 실행 위치에 따라 다른 값 출력
b = 2;
c = 3;
console.log(a, b, c); //1,2,3
a = b; // 2인 b값을 a에 대입. a의 기존값은 제거 -> a : 2 , b : 2
b = c; // 3인 c값을 b에 대입, b의 기존값은 제거 -> b : 3 , c : 3
console.log(a, b, c); //2,3,3

console.log('--------------------------------------------------');
// let 과 var 차이점
// box1, box2 변수 연습
var box1;
let box2;
console.log(box1, box2);
var box1 = 10; // var: 중복 변수 생성시 에러 탐지 불가능
console.log(box1);
/* let box2 = 20; */ // let: 중복 선언 불가. 반드시 에러 발생
box2 = 20; // box2는 이미 생성되었으므로 생성키워드 제외하고 대입
console.log(box2);

console.log('--------------------------------------------------');
// let, const 비교
// x, y 변수
let x = -10; // 생성(let)과 대입(=) 동시 수행
const y = 5; // 상수 5 생성, 대입 동시 수행
console.log(x, y);
x = 0; // x값 변경(기존값 제거)
/* y = 7; */ // 상수(const)는 변경 불가 -> 에러

console.log('--------------------------------------------------');
// 웹사이트 가입 회원정보 변수
// 이름, 나이, 사는 곳 변수 생성
let user_name = '홍길동';
let user_age = 20;
let user_address = '인천시 부평구';
/* console.log('홍길동'); */ // x 변수에 담긴 데이터 사용시 데이터 그대로 출력 안됨
console.log(user_name); // o 변수명을 활용해서 데이터 출력해야함
// 홍길동은 20살이고 인천시 부평구에 삽니다.
// user_name은 user_age살이고 user_address에 삽니다.
console.log(user_name+'은 ' +user_age+'살이고 ' +user_address+'에 삽니다');
console.log(`${user_name}은 ${user_age}살이고 ${user_address}에 삽니다.`);
// + 연결연산자, 더하기연산자
// 홍길동은 내년에 21살이 됩니다.
console.log(user_name+'은 내년에 ' +(user_age+1)+'살이 됩니다.');
// 홍길동은 오늘 21살이 됐습니다.
user_age = 21;
console.log(user_name+'은 오늘 ' +user_age+'살이 됐습니다.');

console.log('--------------------------------------------------');
// 쇼핑몰 상품 변수
// 상품명 : 후드 윈드브레이커
// 가격 : 53910
// 상품명, 가격, 수량 변수 생성하기
const product_name = '후드 윈드브레이커';
const product_cost = 53910;
let product_num = 1;
// 후드 윈드브레이커 1개 가격은 53910원입니다.
// 탬플릿 문자열 활용출력
console.log(`${product_name} ${product_num}개 가격은 ${product_cost}원입니다.`);
// 주문 수량 3개, 총 결제금액은 161730원입니다.
product_num = 3;
console.log(`주문 수량 ${product_num}개, 총 결제금액은 ${product_cost * product_num}원입니다.`);
// num 변수의 데이터종류는 ?
// 숫자 변수의 경우, 생성할때 변수값에 ''달면 문자(string), 따옴표 없이 그냥 쓰면 숫자(number)로 정의
console.log(`product_num 변수의 데이터 종류는 ${typeof product_num}`)
console.log(`product_num 변수의 데이터 종류는 ${typeof (product_num)}`)