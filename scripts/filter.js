//filter.js
const filterView = document.querySelector('.filter_view');
const filterList = document.querySelector('.filter_list');
let filterListShowHide = false; //초기값 정의(숨겨진상태)
console.log(filterView, filterList);

//필터목록 초기 숨기기(false) (객체.속성.속성.=값;)
filterList.style.display='none';

//필터보기를 클릭시
filterView.addEventListener('click',function(){
    //필터가 숨겨진 상태면(false) -> 보이기. //초기 숨겨진 상태: false
    if(filterListShowHide == false) {
        filterListShowHide = !filterListShowHide;
        //위 코드 해석
        //상태변수의 값을 반전(!)시켜서 상태변수에 대입(=)
        // filterListShowHide == true;
        filterList.style.display='flex';
        //위 코드 해석
        //flex로 보이는 상태가 되었으므로 js의 상태변수도 true로 대입해서 추적 가능하게 만들기
        //보이는 상태니까 true라고 재인식시키기 ()
        console.log(filterListShowHide);
    }
    //필터가 보이는 상태면(true) -> 숨기기
    //else: 첫번째 if가 아니면 해당 조건 적용하기
    else if(filterListShowHide == true) {
        filterList.style.display='none';
        filterListShowHide = !filterListShowHide;
    }
});

//필터기능
//전체보기 -> 사과, 바나나, 브로콜리, 당근
//과일 -> 사과, 바나나
//채소 -> 브로콜리, 당근

const filterA = filterList.querySelectorAll('.list');
const filterContents = document.querySelectorAll('.contents li');
console.log(filterA, filterContents); //NodeList 출력시 [index] 개별구분

//data-name, data-cate
//필터 data-name 중 원하는 값을 클릭하면 data-cate 중 같은 값을 가지고 있는 대상을 화면에 출력함.

for(let f of filterA){//필터보기 메뉴들
    console.log(f); //for문으로 반복개별출력 [index] 필요없음
    f.addEventListener('click', function(e){
        e.preventDefault();
        console.log('클릭된 a :', f);
        for(let list of filterContents){
            //필터보기 메뉴 클릭 시 인식해야하는 상품목록들
            console.log(list);
            //f에서 전체보기를 클릭 시 -> list 전체 보이기
            console.log(f.dataset.name); //클릭한 필터의 data name 출력테스트
            list.style.display='none';
            if(f.dataset.name == 'all') list.style.display='block';
            //f에서 과일 클릭 시 -> data-name ="tru" 와 일치하는 list 찾아서 보이기
            //console.log(list.children[0].dataset.cate); //클릭한 필터의 data cate 출력테스트 //children: filterContent(li)가 아니라 자식(a)에 data-cate가 걸려있음
            //f에서 채소 클릭 시 -> data-name ="veg" 와 일치하는 list 찾아서 보이기 (-> 조건문)
            else if(f.dataset.name == list.children[0].dataset.cate) list.style.display='block';
        }
    })
};