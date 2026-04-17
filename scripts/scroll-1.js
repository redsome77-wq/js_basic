// scroll-1.js
const topA = document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a')
const cateContent = document.querySelectorAll('.category_contents section') //cateTitle, cateContent 각 인덱스 갯수 일치
console.log(topA, cateTitle, cateContent);


topA.addEventListener('click',function(e){
    e.preventDefault();//href 막기
    //객체.함수();
    //window.scrollTo(x좌표, y좌표); 
    window.scrollTo(0, 100); 
})

//반품 안내 클릭 시 반품 위치 이동
for(let title of cateTitle) {//임의변수 title
    console.log(title) //Nodelist출력이 아닌 개별출력 확인
    title.addEventListener('click', function(e){
        e.preventDefault();
        console.log('클릭확인');
        activeFunc(title); //클릭한 제목에 관련한 내용으로 스크롤 이동하기
        //객체속성매개변수.currentTarget.dataset.데이터속성이름
        console.log(e.currentTarget.dataset.index);
        const i = e.currentTarget.dataset.index;
        window.scrollTo(0, cateContent[i].offsetTop-200);
    })
};

/* for(let i=0; i<4; i++) {
    cateTitle[i].addEventListener('click', function(e){
        e.preventDefault();//href 막기-없을시 상단이동 후 기능실행
        window.scrollTo(0, cateContent[i].offsetTop-200); 
        //scrollTo y좌표 수치값은 최상단(0) 또는 header의 높이 위치 정도일때 숫자로 작성 -> 그 이상의 큰 값은 객체.속성을 활용해야함
        console.log(cateContent[i].offsetTop);
        activeFunc(cateTitle[i])
    });
}; */

//active 적용/해제 함수
function activeFunc(target){
    for(let i of cateTitle) i.classList.remove('active');
    //모든 카테타이틀의 active 제거. 임의 매개변수 target
    return target.classList.add('active');
    //임의의 target에만 active 적용하고 종료하겠음
};