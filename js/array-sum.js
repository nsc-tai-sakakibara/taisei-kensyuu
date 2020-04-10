let numbers = [1,2,3,4,5];
numbers.unshift
function arraySumWithFor(array) {
    let sum = 0;

    //For を使ってarray の合計を計算してください。
    for(let i = 0; i<=4; i++){
        sum += numbers[i];
    }

    return sum;
}

function arraySumWithWhile(array) {
    let sum = 0;

    //While を使ってarray の合計を計算してください。
    let i;

    while(i <= 4){
        sum += numbers[i];
        i++;
    }

    return sum;
}

function arraySumWithDoWhile(array) {
    let sum = 0;

    //Do While を使ってarray の合計を計算してください。
    let i = 4;

    do {
        sum += numbers[i];
        i++;

    } while(i<=3)

    return sum;
}

function arraySumWithForEach(array) {
    let sum = 0;

    //ForEach を使ってarray の合計を計算してください。

    return sum
}

let forSum = arraySumWithFor(numbers);
let whileSum = arraySumWithWhile(numbers);
let doWhileSum = arraySumWithDoWhile(numbers);
let forEachSum = arraySumWithForEach(numbers);

console.log(`For文での合計: ${forSum}`);
console.log(`While文での合計: ${whileSum}`);
console.log(`doWhile文での合計: ${doWhileSum}`);
console.log(`ForEach文での合計: ${forEachSum}`);