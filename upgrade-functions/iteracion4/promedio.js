const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum=0;
    for (let index = 0; index < numbers.length; index++) {
        sum+=numbers[index];   
    }
    let av = sum/numbers.length;
    console.log(av);
}

average(numbers);