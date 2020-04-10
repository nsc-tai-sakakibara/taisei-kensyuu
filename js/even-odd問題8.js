function separate(array){
    let kisuu=[];
    let guusuu=[];

    for(let i=0;i<array.length;i++){
        if(array[i]%2){
            kisuu.splice((i+1)/2,1,array[i]);
        }else{
            guusuu.splice(i/2,1,array[i]);
        }
    }
    console.log('元のarray : '+'['+array+']');
    console.log(`偶数 : [${guusuu}]`);
    console.log(`奇数 : [${kisuu}]`);
}

let hairetu=[1,2,3,4,5,6];
separate(hairetu);
