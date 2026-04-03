//반복문 for
//for(초기변수생성(i, j, k, m, n)과 초기값대입; 조건식; 증감식){반복실행문}

//자바스크립트 10번 반복 출력 (반복문 이용)
//DOM요소 (li[index]) 20개 1~20 기준으로 생각해서 숫자데이터로 생각해야함.
for(let i=0; i<10; i++){ //0으로 시작, 10보다 작으면, 1씩 증가 -> 10보다 크면 조건식이 거짓이므로 더 실행되지 않음
    console.log('자바스크립트');
};
//10.출력값을 가진채 1줄로 출력

console.log('-----------------------------------------------------------------');
//자바스크립트 10번 반복 출력 (반복문 없을때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
//10번 따로 콘솔로 출력됨

console.log('-----------------------------------------------------------------');
console.log('-----------------------------------------------------------------');
//CSS 5번 반복 출력
for(let i=0; i<5; i++){
    console.log('CSS');
};
//html 20번 반복 출력
/* for(let i=0; i<20; i++){
    console.log(`HTML${i+1}`); //+1 -> 출력시 i=0 기본값이 아닌 1부터 출력함.
}; */
console.log('-----------------------------------------------------------------');
// 구구단 2단 반복출력 "2x1=2"
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x2=${num*1}`;
    result += `${num}x3=${num*1}`;
    return result;
} //function 예시
//1로 시작한 예시
for(let i=1; i<10; i++){
    let result = `2 x ${i} = ${2*i}`
    console.log(result);
};
console.log('-----------------------------------------------------------------');
//0으로 시작한 예시
for(let i=0; i<9; i++){
    let result = `2 x ${i+1} = ${2*(i+1)}`
    console.log(result);
};
console.log('-----------------------------------------------------------------');
const dan2Result = document.querySelector('.dan2 .result');
const dan3Result = document.querySelector('.dan3 .result');
const dan4Result = document.querySelector('.dan4 .result');
const danResult = document.querySelectorAll('section .result');
console.log(dan2Result,dan3Result,dan4Result,danResult);

/* for(let i=0; i<=8; i++){
    let result = `2 x ${i+1} = ${2*(i+1)}<br>`;
    console.log(result);
    //dan2Result.textContent += result; //모든 결과값 텍스트로 출력(textContent)하기 위해 복합대입(+=) 사용!!
    dan2Result.innerHTML += result; //br 태그 포함하기 위해 innerHTML 사용
};
for(let i=0; i<=8; i++){
    let result = `3 x ${i+1} = ${3*(i+1)}<br>`;
    console.log(result);
    dan3Result.innerHTML += result;
};
for(let i=0; i<=8; i++){
    let result = `4 x ${i+1} = ${4*(i+1)}<br>`;
    console.log(result);
    dan4Result.innerHTML += result; 
};*/
for(let i=1; i<10; i++){
    let result = `2 x ${i} = ${2*i}<br>`;
    danResult[0].innerHTML += result;
    result = `3 x ${i} = ${3*i}<br>`;
    danResult[1].innerHTML += result;
    result = `4 x ${i} = ${4*i}<br>`;
    danResult[2].innerHTML += result;
}; //for 하나로 섹션3개에 출력
console.log('-----------------------------------------------------------------');
console.log('-----------------------------------------------------------------');
//자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target')
//태그 생성 목적의 변수(저장소) 생성
const ul = document.createElement('ul') //createElement : 요소 생성
ul.innerHTML = '<li>목록1</li>';
console.log(ul)
//target.innerHTML = ul;
target.appendChild(ul); //createElement로 생성한 태그 삽입 방법. appendChild: 해당 타겟의 마지막 자식 자리에 넣음

/* console.log(target)
target.innerHTML = '<ul>'
target.innerHTML += '<li>목록1</li>'
target.innerHTML += '<li>목록2</li>'
target.innerHTML += '</ul>' //(ul-li*2)생성, 복합대입(+=) 사용!! */