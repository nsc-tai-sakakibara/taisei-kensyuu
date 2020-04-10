function separate(array){
    let kisuu=[];
    let guusuu=[];

    for(let i=0;i<array.length;i++){
        if(array[i]%2){
            kisuu[(i+1)/2] = (i+1);
        }else{
            guusuu[i/2] = (i+1);
        }
    }

    for(let i=0;i<=array.length/2;i++){
        console.log(`偶数${guusuu}`);
        console.log(`奇数${kisuu}`);
    }
}

let hairetu=[1,2,3,4,5,6];
separate(hairetu);
