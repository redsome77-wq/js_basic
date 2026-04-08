//for es6
//1. for~in 객체 및 배열의 인덱스를 반복할 때 사용
//for(초기값; 조건식; 증감식){반복결과}
    //for(let 1=배열; 조건식; 증감식){반복결과}
//for(초기값 in 대입대상){반복결과}
    //for(let i in 배열){반복결과}

const study = ['figma', 'html', 'css', 'js'];
console.log(study); //변수가 올바른지 확인
console.log(study[0]); //실제 사용 예시
console.log(study[1]);
console.log(study[2]);
console.log(study[3]);
console.log('------------------------------------------------------------');

for(let i in study){
    console.log(study[i]);
}
console.log('------------------------------------------------------------');
const boxDd = document.querySelectorAll('.box dd');
console.log(boxDd);

for(let i in boxDd){
    console.log(boxDd[i])
    //boxDd[i].style.borderBottom = '1px solid red';
}

console.log('------------------------------------------------------------');
for(let i of boxDd){
    console.log(i)
    i.style.borderBottom = '1px solid red';
    i.addEventListener('mouseover',function(){
        i.style.borderBottom = '1px solid black';
    })
    i.addEventListener('mouseout',function(){
        i.style.borderBottom = '1px solid red';
    })
}
console.log('-------------------이낙근 찹쌀떡 header------------------------');
//이낙근 찹쌀떡 header
//gnb메뉴에 마우스 올렸을 때 관련 lnb 출력
const gnb = document.querySelectorAll('.right_menu nav .gnb > li');
const lnb = document.querySelectorAll('nav .lnb');
console.log(gnb, lnb);

for(let i of gnb){
    console.log(i)
    console.log(i.children[1])
    i.addEventListener('mouseover', function(){
        i.children[1].style.display='block';
    })
    i.addEventListener('mouseout', function(){
        i.children[1].style.display='none';
    })
}
console.log('------------------------------------------------------------');
//전체메뉴 클릭 시 전체메뉴 나타나기
const mNavOpen = document.querySelector('#m_nav_open');
const mBg = document.querySelector('.m_bg');
const sideXBtn = document.querySelector('.top .close')
console.log(mNavOpen, mBg, sideXBtn);

mNavOpen.addEventListener('click', function(){mbgSH('block');})
sideXBtn.addEventListener('click', function(){mbgSH('none');})
//mBg.addEventListener('click', function(){mbgSH('none');})

function mbgSH(status){return mBg.style.display = status;}
console.log('------------------------------------------------------------');
//데스크톱 메뉴(gnb) 복제해서 모바일메뉴(m_nav)위치에 붙여넣기
const mNav = mBg.querySelector('.m_nav');
const gnbUl = document.querySelector('nav .gnb'); //복제 전 선택
//특정대상 복제 시, 객체.cloneNode() 내장함수 사용

//데스크톱 로그인/장바구니(login_cart > a*2) 복제해서 모바일메뉴(m_nav)위치에 붙여넣기
const mLoginCart = mBg.querySelector('.login_cart');
const dLoginCart = document.querySelectorAll('.right_menu .login_cart a');
console.log(mLoginCart, dLoginCart);

const dLoginClone = dLoginCart[0].cloneNode(true);
const dCartClone = dLoginCart[1].cloneNode(true);

mLoginCart.appendChild(dLoginClone);
mLoginCart.appendChild(dCartClone);

const gnbClone = gnbUl.cloneNode(true); //복제 (ctl+c 유사), true사용시 자식,자손까지 복사
console.log(mNav, gnbUl, gnbClone);

mNav.appendChild(gnbClone); //자식에 붙여넣기
console.log('------------------------------------------------------------');
//모바일 메뉴 기준
//gnb클릭시 lnb보이기 (height 값 이용)
const mGnb = mBg.querySelectorAll('.gnb > li');
const mLnb = mBg.querySelectorAll('.lnb');
console.log(mGnb, mLnb);

for(let i of mLnb){i.style.transition='height 0.3s'}

for(let i of mGnb){
    i.addEventListener('click', function(){
        console.log('클릭')
        mLnbHide();
        //max-content 숫자로 수치화한 속성=> scrollHeight
        console.log(i.children[1].scrollHeight)
        i.children[1].style.height=Number(i.children[1].scrollHeight)+'px';
    })
}

function mLnbHide(){
    for(let i of mLnb)i.style.height=0;
}