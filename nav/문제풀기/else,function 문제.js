//삼육구
function 삼육구게임(num){
    if (num%9==0){
        console.log('박수박수');
    }else if(num%3==0){
        console.log('박수');
    }else{
        console.log('통과');
    }
}

삼육구게임(54);

//시험점수 합격,불합격인지
function 합격했냐(num1,num2){
    if(num1+num2 >= 120){
        console.log('합격');
    }else if(num1 < 40 || num2 < 40){
        console.log('불합격');
    }else{
        console.log('불합격');
    }
}

합격했냐(30,80);
