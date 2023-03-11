//1부터 n까지의숫자 배열이 있음
//랜덤으로 배열하는데 두개의 연속된 숫자는 붙어있어야됨


//1. n개의 배열을 만들기
//2. 배열을 2개씩 나누고 묶기
//3. 2개씩 나눈 배열을 랜덤으로 섞기
//4. 

//n개의 배열 만들기
function solution(n){
    let arr = [];
    for(i=1; i<=n; i++){
        arr.push(i)
    }
    return arr
}

console.log(solution(9))


//배열 두개로 묶기
function chunk({solution(9)}, size = 1) {
    const arr = [];
      
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
  
    return arr;
  }

//배열 랜덤으로 섞기
// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
//    }

console.log(chunk([1,2,3,4,5,6,7,8,9],2))