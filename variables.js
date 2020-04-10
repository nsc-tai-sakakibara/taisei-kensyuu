function separate(array){
    let kisuu=[0,0,0,0,0];
    let guusuu=[0,0,0,0,0];
    let j;
    for(let i=0;i<array.length;i++){
        j=i/2;
        if(array[i]%2){
            kisuu[(i+1)/2] = array[i];//なぜできない　kisuuに0.5 arrayを追加？
            console.log(kisuu);
        }else{
            guusuu.splice(i/2,1,array[i]);
            console.log(guusuu);            

        }

    }

        console.log(kisuu);
        console.log(guusuu);
}

let hairetu=[1,2,3,4,5,6];
separate(hairetu);
