/*
 * 四角の面積を計算してください。
 *
 * length: 縦の長さ
 * width: 横の長さ
 */

function getArea(length, width) {
    let area;

    area = length * width;
    return area;
}

console.log('面積は'+getArea(2,3));  //大文字Aのために数時間かかった

/**
 * 四角の周囲を計算してください。
 *
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getPerimeter(length, width) {
    let perimeter

    perimeter = length * 2 + width * 2;
    return perimeter

}
console.log('四角の周囲は'+getPerimeter(2,3));
