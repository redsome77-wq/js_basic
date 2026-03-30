let data1 = ''; //변수생성과 빈 문자열 대입
//1. typeResult 변수 생성
//2. Boolean 내장함수 활용 data1 변수에 들어간 논리데이터 종류 확인
//3. typeResult 대입
let typeResult = Boolean(data1);
console.log(`data1의 데이터 타입은 : ${typeResult}`);

data = 'ABC'; //data1문자 'ABC'재대입

data1 = 1;
typeResult = Boolean(data1);
console.log(`data1의 데이터 타입은 : ${typeResult}`); //출력

let data2; //undifined
typeResult = Boolean(data2);
console.log(`data2의 데이터 타입은 : ${typeResult}`); //출력

console.log(`------------------------------------------`);
//false null NaN
let data3;
data3 = false; //false 논리키워드
typeResult = Boolean(data3);
console.log(`data3의 데이터 타입은 : ${typeResult}`); //출력

data3 = null; //null 값을 삭제할때 대입하는 키워드
typeResult = Boolean(data3);
console.log(`data3의 데이터 타입은 : ${typeResult}`); //출력

data2 = `가나다라`;
data3 = data2 * 10; //NaN
console.log(data);

typeResult = Boolean(data3);
console.log(`data3의 데이터 타입은 : ${typeResult}`); //출력

console.log(`------------------------------------------`);
data2 = [0,1,2]; //3배열
data3 = [];
//빈 배열 new Array(); 내장함수가 있다로 구분
//빈 문자열은 거짓 ''
typeResult = Boolean(data2);
console.log(`data2의 데이터 타입은 : ${typeResult}`); //출력
typeResult = Boolean(data3);
console.log(`data3의 데이터 타입은 : ${typeResult}`); //출력

console.log(`------------------------------------------`);
//조건문
//if(조건식){조건식이 참일때 실행되는 실행문}
//if(조건식){조건식이 참일때}else{조건식이 거짓일때 실행}
let x = 10;
let y = 20;
let result = x != y; //=(대입) ==(피연산자 같은지 비교연산) != (다른가?)
console.log(`result => ${result}`); //출력

if(result) console.log(`result는 참`);
//if(result) {console.log(`result는 참`)}; //실행이 한줄이면 중괄호 생략가능

console.log(`------------------------------------------`);
//비교연산자
//일치연산(기본/엄격) : ==, ===
//부등연산(기본/엄격) : !=, !==
//크다, 작다 : <, >
//크거나 작다, 작거나 같다 : <=, >=

x = '5';
y = 5;
if( x==y ) console.log(`x와 y는 같다`);
x = Number(x); //기존 x 속성을 숫자로 변환대입
if( x===y ) console.log('x와 y는 데이터 타입까지 같다');

let w = 1920;
let h = 1080;
if(w!=h) console.log('w와 h는 다르다');
if(w>h) console.log('w와 h보다 크다');
w -= h; // w = w - h;
if(w<h) console.log('w와 h보다 작다');
if(w<=h) console.log('w와 h보다 작거나 같다');

console.log(`------------------------------------------`);
//인쇄하기 버튼 클릭시 확인/취소 묻는 창이 실행
//확인 누르면 -> 인쇄창 실행
//취소 누르면 -> 인쇄가 취소되었습니다. 메시지 실행
const prtBtn = document.querySelector('#print_btn');
console.log(prtBtn);
prtBtn.addEventListener('click', function(){
    let user = confirm('인쇄하시겠습니까?');
    console.log(user);
    if(user)print();
    //if(user==true)print();
    //if(user!=false)print();
});

console.log(`------------------------------------------`);
const adBtn = document.querySelector('#ad_btn')
console.log(adBtn);
adBtn.addEventListener('click', function(){
    let user = confirm('당신은 성인이십니까?');
    console.log(user);
    if(user){confirm(`사이트에 접속할 수 있습니다`);
        location.href = 'https://www.google.com'}
    else{window.alert(`사이트에 접속할 수 없습니다`)};
});

