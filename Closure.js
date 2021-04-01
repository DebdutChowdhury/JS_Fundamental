const outerfun = (a) => {
    let b = 10;
    const innerfun = () => {
        let sum = a + b;
        console.log(`the sum is ${sum}`);
    } 
    return innerfun;
} 
let inner = outerfun(5);
console.dir(inner);
inner();