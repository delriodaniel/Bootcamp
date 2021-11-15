const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum=0;
    for (let index = 0; index < param.length; index++) {
        sum+=param[index];  
    }
    console.log(sum);
}

sumAll(numbers);