function solution(number) {
    if(number < 0) return 0;

    numberArray = [];

    for(let i = 1;i < number;i++) {
        
        if(i % 3 === 0 || i % 5 === 0) {
            numberArray.push(i);
        }
    }
    const result = numberArray.reduce((curr, acc) => curr + acc, 0); 
    return result;
}

console.log(solution(10));