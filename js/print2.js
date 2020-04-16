let k;
let arrayYoko = [];

//for(let i=0;i<=9;i++){
    for(let j=0;j<=9;j++){

        arrayYoko[j]=j+1;

        //出して、リセット、整数倍　入れ込む
    }
    console.log(arrayYoko); //なんで５こごとに改行？

    for(let i=0;i<=9;i++){

        arrayYoko.forEach(element =>{
            k=element*(i+2);
            // console.log(element);
            // console.log('k'+k);
            
            //console.log('     ');
            
            arrayYoko.splice(i,1,k);
            
        });
    }
    
    console.log(arrayYoko);