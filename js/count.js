function rnd(rng){
    return Math.floor(Math.random() * Math.floor(rng));
}

let array=[];
let length=4;
for(let i=0;i<length;i++){
    array.push(rnd(6));
}

console.log(array);

let x=0;
let count;
for(i=0;i<=length-1;i++){
    
    if(x<array[i]){
        count = 1;
        x = array[i];
    }else if(x==array[i]){
        count+=1;

    }
}
console.log(count);
