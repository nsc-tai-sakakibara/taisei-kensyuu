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
  }
  get amount() {
    return this._amount;
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
