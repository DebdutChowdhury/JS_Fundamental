//  Any function that is passed as an argument is called a callback function

const Person1 = (friend, callFrnd) => {
    console.log(`I am busy with ${friend}, I will call you later.`);
    callFrnd();
}

const Person2 = () =>{
    console.log(`I will call back later.`);
}

Person1("Ashwini", Person2)