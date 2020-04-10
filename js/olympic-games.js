//オリンピックが初めて開催された年
const startYear = 1896;

function gameYears(year) {
    //startYear　からyearまでのオリンピック開催年を
    //console.logを使って表示する。

    let count = startYear;
    while(count<=year){
        
        if(count==1916||count==1940||count==1944){
            
        }else {
            
            console.log(count);
        }
        count += 4;

    }
}

gameYears(2020);

console.log('次は東京202・・・');
console.log('ゲフン　ゲフン');
console.log('次は東京2021だ');
