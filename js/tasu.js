let kai=0;//0がないと数値ではなく文字列をいれようとする？
let array1 = [1,2,3,4,5];

function max(a,b){
    return a-b;
}
function min(a,b){
    return b-a;
}

function tasu(hairetu){
    for(let i=0;i<=hairetu.length-2;i++){
        kai += array1[i];
    }
    console.log(`${array1[0]} + ${array1[1]} + ${array1[2]} + ${array1[3]} = ${kai}`);
    kai=0;
}

array1.sort(max);
tasu(array1);

array1.sort(min);
tasu(array1);
