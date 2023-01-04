/*
버튼0 누르면 
2. 모든버튼에 orange 클래스명 제거
1. 버튼0에 orange 클래스명 부착
4. 모든박스에 show 클래스명 제거
3. 박스0에 show 클래스명 부작
*/



var tab_btn = $('.tab-button'); //자주쓰는 셀렉터는 변수에 넣어 쓰기(성능적으로 좋음)
var tab_con = $('.tab-content');

for(let i =0; i<tab_btn.length; i++){ //찾으려는 요소 뒤에 .length 붙이면 갯수 세어줌 
// for(let i = 0; i<5; i++){ //버튼이 5개 이므로 반복문도 5번돌고 멈춤, 반복문 쓸때 let 넣어야 정확히 반복됨
    tab_btn.eq(i).on('click',function(){ // .eq(n) : 왼쪽의 n번째 
        tab_btn.removeClass('orange');
        tab_btn.eq(i).addClass('orange');
        tab_con.removeClass('show');
        tab_con.eq(i).addClass('show');
    });
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