const product = {
    name: 'phone',
    price: 23232,
    specs: {
        ram: '8GB',
        rom: '512GB'
    }
}
// cloning using spread operator
const p1 = {
    ...product
}

// object assign method
// its not allow to deep clone in the nested object
// only allow shallow clonning
const p2 = Object.assign({}, product);
//through JSON
const p3 = JSON.parse(JSON.stringify(product));

p1.name = 'realme phone';
p1.specs.ram = '12GB'
p2.name = 'redmi phones';
p2.specs.rom = '1TB';
p3.name = 'Moto phone';
p3.specs.ram = '6GB'
console.log(product);
console.log(p1);
// console.log(p2);
// console.log(p3);
