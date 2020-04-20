let array = [];
function rnd(length, limit) {
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * Math.floor(limit)));
  }
}
rnd(4, 6);
//console.log(array);

function crescendo(a, b) {
  return a - b;
}
array.sort(crescendo);
//console.log(array);

let tmp;
function decrescendo(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
}
decrescendo(array);
//console.log(array);

function fibonatti(limit, start) {
  let suuti = [0, 1]; //手書き×××××
  for (let i = 1; suuti[i] <= limit; i++) {
    suuti[i + 1] = suuti[i] + suuti[i - 1];
  }
  for (let j = start; suuti[j] <= limit; j++) {
    console.log(suuti[j]);
  }
}
//fibonatti(34,1);

let z = 0;
function sosuu(x) {
  if (x > 1) {
    for (let y = 2; y <= x / 2; y++) {
      if (x % y == 0) {     //汚い×××××
        console.log(`${x}は${y}の倍数`);
        z = 1; //汚い×××××
      }
    }
    if (z == 0) {
      console.log(`${x}は素数`);
    }
  }
}
sosuu(6);
