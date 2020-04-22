class Product {
  constructor(name, price, division, stock) {
    this._name = name;
    this._price = price;
    this._division = division;
    this._stock = stock;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get division() {
    return this._division;
  }
  get stock() {
    return this._stock;
  }
}

class Baket extends Product {
  constructor(name, price, amount) {
    super(name, price);
    this._amount = amount;
    this._list=[];
  }
  get amount() {
    return this._amount;
  }
  get list() {
    return this._list;
  }

  addProduct(product,count){
      
  }
  // align(name){
  //     name.sort();
  //}
}

let carbage = new Baket("キャベツ", 0, 2);
let orange = new Product("みかん", 0, 2, 0);
let welshOnion = new Product("ネギ", 0, 2, 0);
let carot = new Product("人参", 0, 2, 0);

//'キャベツ','みかん',"ネギ","メロン","人参"
console.log(carbage);

// set name(value){
//     this._name=value;
// }

class Receipt{
  constructor(){
    this.date = new Date();
    this.productList = [];
  }
  //買った商品を追加する
  addProduct(item){
    //買った商品リストに追加する
      //リストの中から同じ商品名のものがないかを検索する
      //商品の名前が一緒だったら数だけを追加する
      //商品をそのまま追加する

  }

  //合計を書き出す
  _sumCart(){
    //CartItemのgetPriceの合計を出す
      //productListの中身を合計する
      //合計を変数に格納して返す
  }

  //出力する
  createReceipt(){
    //addProduct,_sumCartを使う
    //書き出すための処理
      //日付　new date
      //productList　=>　商品名　（一つの値段　＊　数）　合計の値段
      CartItem.getUnitPrice();

      //合計　=> _sumCart の戻り値
    //書き出したタイミングでオブジェクトを空にする
    this.addProduct();
    this._sumCart();


  }
}
