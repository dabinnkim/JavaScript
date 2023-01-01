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

/*가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다.*/

function 햠수(c,d){
    var price = c - (c * 0.1);
    if (d==true){
        price = price - 1.5
    }
    return price
}

console.log(햠수(90,true)) 
