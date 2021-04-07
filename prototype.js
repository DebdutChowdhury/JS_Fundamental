let Mobile = function(model_num) {
    this.model = model_num;
    this.price = 5000;
}

let samsung = new Mobile('Galaxy');
let realme = new Mobile('Note');
// samsung.color = 'black'
Mobile.prototype.color = 'black';
console.log(samsung);
console.log(realme);