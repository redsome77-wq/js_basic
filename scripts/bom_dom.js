//bom_dom.js
//함수기초연습
function calc (num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total=>${total}`);
}
calc(101);
calc(5);
calc(`1`);
console.log(`------------------------------------------------`);
//1400px / 4 - 20px //pc
//1024px / 3 - 20px //tab
//420px / 2 - 20px //mo
//결과 예시 : width:?px

function widthCalc(width, num){
    let calc = (width - 20) / num;
    let total = `width:${calc.toFixed(1)}px`; //결과값 반올림하여 소수점 n자리까지 표기 함수 toFixed(n) -> 문자열표기됨
    console.log(total);
};
widthCalc(1400, 4);
widthCalc(1024, 3);
widthCalc(420, 2);
console.log(`------------------------------------------------`);
//BOM 내장함수 종류
//window.함수(); //window는 최상위객체라 생략가능
//let bom1 = window.alert('경고 메시지');
document.write('메시지1');
document.write('메시지<br>2');
document.write('<h2>메시지3</h2>');

//DOM(document object model)
//변수생성 -> 변수활용 연산자 또는 함수 진행
//DOM변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag);
//js에 의해 동적으로 변경되는 결과에 따라 스타일 변동을 위해 자바스크립트 안에서도 css를 작성할 수 있다.
//dom객체.style.속성 = '값';
//dom객체.style = '속성:값';
h1Tag[0].style.backgroundColor = '#ff0';
h1Tag[0].style.border= 'solid 1px red';
//h1Tag[0].style= 'border : 1px solid red';
console.log(`------------------------------------------------`);
//클래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);
titleCls[0].style.borderBottom = '2px solid blue';
titleCls[0].style.fontSize = '3.0rem';
titleCls[0].style.fontWeight = '200';
titleCls[0].style.color = 'red';
titleCls[0].style.padding = '50px 30px 25px';
titleCls[0].style.marginBottom = '100px';
titleCls[1].style.borderBottom = '2px solid red';
console.log(`------------------------------------------------`);
//아이디DOM
const txtId = document.getElementById('txt');
console.log(txtId);
txtId.style.color = 'blue';
txtId.style.fontSize = '2.5rem';
txtId.style.fontWeight = '900';
txtId.style.textAlign = 'center';
console.log(`------------------------------------------------`);
//ES6ver DOM
//title 클래스 잡기
const titleClsQ = document.querySelector('.title');
console.log(titleClsQ);
//h1태그 잡기
const h1Tagq = document.querySelector('.box h1');
console.log(h1Tagq);
//아이디 잡기
const txtIdq = document.querySelector('.box #txt');
console.log(txtIdq);
txtIdq.style.textAlign = 'right';
console.log(`------------------------------------------------`);
//All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title')
console.log(titleAll);
titleAll[0].style.backgroundColor = '#000';
console.log(`------------------------------------------------`);
//스타벅스 카테고리/테마 메뉴 JS만들기
//특정 목표 달성을 위한 절차적 순서 흐름 계획
//초기 모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
//이미 작성된 html, css 기준

//()=변수. 이미 변수가 된 항목은 표시하지않음.
//1. (테마 내용) 숨김
//2. (테마 제목) 클릭
//3. (카테고리 내용) 숨기기, 테마 내용 보이기
//4. (카테고리 제목) 클릭
//5. 카테고리 내용 보이기, 테마 내용 숨기기

//1. (테마 내용) 숨김
//숨기기(동작) 실행하려면 테마 내용(요소) 필요
//변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:first-child');
//변수 테스트(에러 조기 확인)
console.log(theme, themeTitle, category, categoryTitle);
//실행
theme.style.display='none';
//themeTitle.style.display='none';

//2. (테마 제목) 클릭
themeTitle.addEventListener('click',themeShow);

//3. (카테고리 내용) 숨기기, 테마 내용 보이기
function themeShow(){
    category.style.display='none';
    theme.style.display='block';
}

//4. (카테고리 제목) 클릭
categoryTitle.addEventListener('click',categoryShow);

//5. 카테고리 내용 보이기, 테마 내용 숨기기
function categoryShow(){
    theme.style.display='none';
    category.style.display='block';
}
