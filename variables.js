function separate(array){
    let kisuu=[];
    let guusuu=[];

    for(let i=0;i<array.length;i++){
        if(array[i]%2){
            kisuu[i] = array[i];
            console.log(kisuu);
        }else{
            guusuu[i] = array[i];
            console.log(guusuu);            

        }

    }

    for(let i=0;i<=array.length/2;i++){
        console.log(kisuu[i]);
        console.log(guusuu[i]);
    }
}

let hairetu=[1,2,3,4,5,6];
separate(hairetu);
