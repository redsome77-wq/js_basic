//query.js
//tag : header, nav, ul, li, a
//class : gnb, lnb

//변수 태그5개, 클래스2개
const gnbCl = document.querySelector('.gnb');
const lnbCl = document.querySelector('.lnb');
const headerT = document.querySelector('header');
const navT = document.querySelector('nav');
const ulT = document.querySelectorAll('ul');
const liT = document.querySelectorAll('.gnb > li');
const liTt = document.querySelectorAll('.gnb > li li'); //중간 ul생략가능
const aT = document.querySelectorAll('a');
const gnbaT = document.querySelectorAll('.gnb > li > a');
const lnbaT = document.querySelectorAll('.lnb > li > a');

//콘솔확인(오류조기확인)
console.log(gnbCl, lnbCl, headerT, navT, ulT[0], ulT[1], liT, liTt, aT, gnbaT, lnbaT);


console.log('----------------------------------------------------------------');
//함수 기초활용 예제1.
//function 함수명(매개변수){반복실행명령어}    함수호출();
//1.할인율 계산기
//(100 - 할인율) / 100
//(100 - 5) / 100 = 0.95
//판매가 * 0.95
let discount = ''; //빈 문자 데이터(변수) 작성 위해 빈 슬롯 생성. 숫자 작성시에는 '' 대신 0으로 초기값 작성

//discountFunc(24990);
//discountFunc(85100);
console.log(discountFunc(24990));
//alert(discountFunc(85100));

function discountFunc(price){
    discount =`5% 할인 : ${price * 0.95}원, `;
    discount +=`10% 할인 : ${price * 0.9}원, `;
    discount +=`20% 할인 : ${price * 0.8}원, `;
    discount +=`30% 할인 : ${price * 0.7}원`;
    //console.log(discount);
    return discount; //함수 밖으로 discount값만 내보낸다.*함수 호출할때*
}// **함수의 결과값은 다양한 함수로 실행할 수 있어야하기 때문에 함수 내부에서 실행함수를 정하는 것이 아닌 리턴으로 값만 내보내고 함수밖에서 실행함수를 정한다.**