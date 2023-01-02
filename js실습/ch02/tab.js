/*
버튼 1 누르면 
1. 버튼1에 orange 클래스명 부착
2. 박스1에 show 클래스명 부착
*/

$('.list').on('click',function(){
    if($('.btn1').click){
        $('.btn1').toggleClass('orange');
        $('.tab1').toggleClass('show');
    }
});