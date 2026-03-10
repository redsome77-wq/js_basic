// operator.js
let greeting = "안녕" + "봄"; //2개 이상 반복데이터 변수라 저장
// let greeting -> 변수 생성
// "안녕" + "봄" 문자열 2개를 연결 -> 우측의 값을 좌측 변수로 대입
console.log(greeting+"잘가"); //'잘가'는 다음에 쓸일 있을지 모를 일회성데이터 -> 변수대입없이 그냥 사용
//console.log() 객체.함수()
//console 출력되고 싶은 위치대상(객체)
//log 실행하고 싶은 함수 명령어
console.log(typeof(greeting)); //해당 변수의 데이터타입은?
//greeting변수의 데이터타입을 typeof 함수로 확인하고
//console.log로 출력한다.
console.log('-------------------------------------------------------');
let a = 1; // 숫자 대입 a
let b = "1"; // 문자 대입 b
// 결과를 담는 변수
let total = a+b; // 1+'1' = 11
// 결과 출력 함수
console.log(total);
console.log('-------------------------------------------------------');
let x;
const y = '20';
console.log(x, y); // x는 정의되지 않아서 (undefined, 20) 출력
console.log(y+b); // 201
// y 초기화 불가 -> y는 const 상수라 변경할 수 없음
x = '10'; // x는 정의 안됨 상태 -> 문자 10 대입받음
console.log(x+y); // 1020
x = null; // x변수의 값 제거(초기화!!) -> null = 초기값 = 0
console.log(x+y); // null20 -> 문자 출력
console.log(x+a); // null1?? 1?? -> null은 숫자로 표현될 수 없어서 출력되지않음 //// 데이터타입 확인하기!!
console.log('-------------------------------------------------------');
//log(), typerof()
//prompt() : 질문, 답변 창을 띄우는 함수
//Number() : 괄호 안 데이터를 숫자로 변환하는 함수
//1+4=?
//유치원생 대상 두 수를 더하는 문제 프로그램
/* const num1 = prompt('첫번째 수를 입력하세요'); // 입력한 값은 num1에 들어감
const num2 = prompt('두번째 수를 입력하세요'); */
const num1 = Number(prompt('첫번째 수를 입력하세요')); // 제일 안쪽 괄호부터 진행된다고 생각하기!!
const num2 = Number(prompt('두번째 수를 입력하세요'));
//1. const num1 상수 생성
//2. prompt() 질문하고 사용자에게 문자열 답변 받고 
//3. Number() 문자열을 숫자로 변환
//4. = 대입연산자로 num1 대입완료

/* console.log(num1, typeof(num1)); */

//결과 담는 변수
/* const result = Number(num1) + Number(num2); */
const result = num1 + num2;
//결과 출력
console.log(`${num1}+${num2}의 정답은 ${result}입니다~!`);
//1+1의 정답은 2입니다~!