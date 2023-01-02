

document.querySelector('.navbar-toggler').addEventListener('click',function(){ //getElementsByClassName->querySelector로 셀렉터 변경
    document.querySelector('.list-group').classList.toggle('show');
})






/*document.getElementsByClassName('navbar-toggler')[0].addEventListener('click',function(){ //1.클래스가 navbar-toggler인것 클릭했을때
    document.getElementsByClassName('list-group')[0].classList.toggle('show'); //2.클래스가 list-group 인것에 show가 추가되어 list-group 보여줌
    //classList.add(클래스명):괄호안의 클래스 추가
    //classList.toggle(클래스명):괄호안의 클래스가 없으면 추가, 있으면 삭제 => 버튼 한번 클릭시 나타남, 한번 더 클릭시 사라짐 
})*/


