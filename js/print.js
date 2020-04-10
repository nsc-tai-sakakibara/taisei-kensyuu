let data;
let arrayYoko = [];
let kakunou = [10][10];

//let kakeru = [];

for(let i=0;i<=9;i++){
    for(let j=0;j<=9;j++){
        arrayYoko.splice(j,1,(i+1)*(j+1));
    
    }
    console.log(arrayYoko); //なんで５こごとに改行？
    kakunou[i][] arrayYoko

}


// for(let i=0;i<=9;i++){
//     arrayYoko.forEach(element =>{

//     kakeru.splice(i,1,2*element);
//     console.log(kakeru);
//     console.log(element);

//     });
// }


// console.log(kakeru);