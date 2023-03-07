// function count(a){
//     const resultElement = document.getElementById('result');
//     let num = resultElement.innerText;

//     const drink = document.getElementById('drink')
//     let dr = drink.innerText;

//     if (a=="100"){
//         num = parseInt(num)+100; //parseInt 문자열 숫자로 변환
//     }else if(a=="500"){
//         num = parseInt(num)+500;
//     }else{
//         num = parseInt(num)+1000;
//     }
    
//     //결과출력
//     resultElement.innerText=num;
    

// }

  

//초기 결과값 0
var coin = 0

//버튼 기능
function btn1_click(){
    coin = coin + 100;
}

function btn2_click(){
    coin = coin + 500;
}

function btn3_click(){
    coin = coin + 1000;
}

document.querySelector('.btn').addEventListener('click',()=>{
    console.log(coin)
    if(coin>10000){
        alert('삽입가능금액 10,000원 이하입니다.')
    }
})

function 결과출력_click(){
    document.getElementById('결과').innerHTML=coin+'원'
    //300미만
    if(coin<300){
        document.getElementById('먹을수있는음료').innerHTML='먹을 수 없음'    
    }
    //300이상
    else if(coin<=300){
        document.getElementById('먹을수있는음료').innerHTML='비타민음료' 
    }
    //500이상
    else if(coin>=500 && coin<1000){
        document.getElementById('먹을수있는음료').innerHTML='사이다 비타민음료' 
    }
    //1000이상
    else if(coin>=1000 && coin<=10000){
        document.getElementById('먹을수있는음료').innerHTML='사이다 콜라 비타민음료' 
    }
}


document.getElementById('btn1').addEventListener('click', btn1_click)
document.getElementById('btn2').addEventListener('click', btn2_click)
document.getElementById('btn3').addEventListener('click', btn3_click)
document.getElementById('결과출력').addEventListener('click',결과출력_click)
