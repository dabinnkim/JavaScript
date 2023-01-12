/*
array에서 특정이름 찾고싶음
있는 이름 쓰면 콘솔창에 '있어요'
없는 이름 쓰면 콘솔창에 아무것도 안뜸
*/

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
    for(var i =0; i<출석부.length; i++){
        if(name==출석부[i]){
            console.log('있어요');
        }
    }
}

console.log(이름찾기('영희'));


//구구단
for(let i =1; i<10; i++)
console.log(2*i);

for(let j =2; j<10; j++){
    for(let i =1; i<10; i++){
        console.log(j*i);
    }
}