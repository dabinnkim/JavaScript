/*
버튼0 누르면 
2. 모든버튼에 orange 클래스명 제거
1. 버튼0에 orange 클래스명 부착
4. 모든박스에 show 클래스명 제거
3. 박스0에 show 클래스명 부작
*/

$('.tab-button').eq(0).on('click',function(){ // .eq(n) : 왼쪽의 n번째 
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
})