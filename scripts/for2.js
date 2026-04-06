//반복문
//for(초기값; 조건식; 증감식)(반복실행결과)
console.log(`-----------------------------------------------------------------`);
//5번 반복
//for(let i=1; i<6; i++)
console.log('<dl>'); //반복되지 않는것은 for 밖에 배치
console.log('<dt>제목</dt>');
for(let i=1; i<=5; i++){
    //console.log(i);
    console.log(`<dd>${i}</dd>`);
};
console.log('</dl>');
console.log(`-----------------------------------------------------------------`);
//table>tr>th+td*10
console.log('<table>');
console.log('<tr>');
console.log('<th>제목</th>');
for(let i=1; i<=10; i++){
    console.log(`<td>내용</td>`);
};
console.log('</tr>');
console.log('</table>');
console.log(`-----------------------------------------------------------------`);
const navA = document.querySelectorAll('nav a');
console.log(navA);
for(let i=0; i<7; i++){
    console.log(i);
    //요소.이벤트함수(이벤트종류,이벤트했을때 실행 함수)
    navA[i].addEventListener('click', function(){
        console.log('클릭확인');
        navA[i].style.backgroundColor='#ff0'; //클릭시 클릭메뉴 색상변경
    })
    //console.log(`-----------------------------------------------------------------`);
    //나머지 연산자로 결과가 0, 1에 따라 홀, 짝 구분 (i를 2로 나눈 나머지값으로 홀짝판단)
    //if(i%2==1) navA[i].style.backgroundColor='#ff0';
    //if(i%2==0) navA[i].style.backgroundColor='rgb(0, 255, 242)';
    //console.log(`-----------------------------------------------------------------`);
    //if(i==0 || i==1) navA[i].style.backgroundColor='#ff0'; //if옆에 있을때만 적용
    //if(i<4) navA[i].style.backgroundColor='#ff0'; //if옆에 있을때만 적용
    //else navA[i].style.backgroundColor='rgb(0, 255, 242)';
    //if(i>=4) navA[i].style.backgroundColor='rgb(0, 255, 242)';
        navA[i].style.borderBottom='#f700ff 2px solid';
};
console.log(`-----------------------------------------------------------------`);
//메인메뉴와 서브메뉴 (반복문 활용) // querySelector정의할때 - 부모?기준?으로
const gnb = document.querySelectorAll('.gnb > li')
const lnb = document.querySelectorAll('.lnb')
console.log(gnb, lnb);

for(let i=0; i<2; i++){
    lnb[i].style.display='none';
    gnb[i].addEventListener('mouseover', function(){
        console.log('마우스 올린 이벤트 확인');
        gnb[i].style.backgroundColor='#f700ff';
        gnb[i].children[0].style.color='#ffffff';
        lnb[i].style.display='block';
    });
    gnb[i].addEventListener('mouseout', function(){
        console.log('마우스 나간 이벤트 확인');
        gnb[i].style.background='none'; //값을 none이라고 쓸땐 background로 속성 넣기
        gnb[i].children[0].style.color='#000000';
        lnb[i].style.display='none';
    });
};