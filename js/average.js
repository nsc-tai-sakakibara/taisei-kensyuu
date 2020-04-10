function average(array){

    let sum =0;

    for(let count = 0; count < array.length;count++){

        sum+=array[count];

    }

    return sum/array.length;

}

let hairetu = [4,5,6];

console.log(average(hairetu));