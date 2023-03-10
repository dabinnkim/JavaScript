/* tab1

♣for 반복문 사용해서 tab 만들기

버튼0 누르면 
2. 모든버튼에 orange 클래스명 제거
1. 버튼0에 orange 클래스명 부착
4. 모든박스에 show 클래스명 제거
3. 박스0에 show 클래스명 부작
*/



var tab_btn = $('.tab-button'); //자주쓰는 셀렉터는 변수에 넣어 쓰기(성능적으로 좋음)
var tab_con = $('.tab-content');

for(let i =0; i<tab_btn.length; i++){ //찾으려는 요소 뒤에 .length 붙이면 요소의 갯수 세어줌 
// for(let i = 0; i<5; i++){ //버튼이 5개 이므로 반복문도 5번돌고 멈춤, 반복문 쓸때 let 넣어야 정확히 반복됨
    tab_btn.eq(i).on('click',function(){ // .eq(n) : 왼쪽의 n번째 
        tabopen(i)
    });
}


function tabopen(num){ //아래 코드 너무 길어서 함수로 축약함
    tab_btn.removeClass('orange');
    tab_btn.eq(num).addClass('orange');
    tab_con.removeClass('show');
    tab_con.eq(num).addClass('show');
}



// tab_btn.eq(0).on('click',function(){ // .eq(n) : 왼쪽의 n번째 
//     tab_btn.removeClass('orange');
//     tab_btn.eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click',function(){ 
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click',function(){ 
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })






/* tab2

♣이벤트리스너 하나만 써서 tab 만들기
이벤트 버블링 알고있으면 이벤트리스너 많이 필요 없음
*/
var btn = $('.tab-btn');
var con = $('.tab-con');

function tabopen2(num){
    btn.removeClass('blue');
    btn.eq(num).addClass('blue');
    con.removeClass('show');
    con.eq(num).addClass('show');
}

$('.li').click(function(e){
    console.log(e.target.dataset.id); //e.target - 유저가 실제로 누른 것
    tabopen2(e.target.dataset.id); //dataset - 지금 누른 버튼에 숨겨져있던 data-자료이름 가져와줌
})



//array 자료형
var car = ['소나타',50000,true];
car[0] = '아반떼';
console.log(car[0]);
console.log(car.sort());

//object 자료형
var car2 = {name : '제네시스',price : [50000, 30000, 4000]}; 
car2.name='레니게이드';
car2['name']='캐스퍼';
console.log(car2['name']);

// client-side-rendering 데이터바인딩(데이터꽂기)
document.querySelector('.car-title').innerHTML=car2.name;
document.querySelector('.car-price').innerHTML=car2.price[1];
 


//<select>안에 <select> 넣기 
var shirts = [95, 100, 105, 110];
var pants = [28, 30, 32, 34, 36]; 

$('.form-select').eq(0).on('input',function(){ //input : <input>값 변경될때 이벤트 작동
    var value = this.value;// this == e.currentTarget 현재 선택한 것
    if(value =='셔츠'){ 
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach(function(a){ //forEach : array의 데이터 갯수만큼 반복 a:array안의 데이터들
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        })
    }else if(value=='바지'){ 
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach(function(a){  
            $('.form-select').eq(1).append(`<option>${a}</option>`);
            // console.log('1');
        })
    }
    
})

//object 반복문
var obj = {name:'kim', age:20}

for(var key in obj){
    console.log(obj[key]);
}





// 자바스크립트로 html 생성하기
// 추가함수 insertAdjacentHTML
var 테스트 = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend',테스트);
$('#test').append(테스트);







