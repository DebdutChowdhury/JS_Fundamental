// The bind() method takes an object as an 1st argument and 
// create a new function.

const Programmer1 = {
    name: "Debdut",
    technology: "React",
}

const Programmer2 = {
    name: "Ashwini",
    technology: "Angular",
}

function feature(codeLine) {
    console.log(`Hello I am ${this.name}, my technology is ${this.technology}
                , I wrote ${codeLine} line everyday.`);
}

let reactProgrammer = feature.bind(Programmer1);
reactProgrammer(200);
let angularProgrammer = feature.bind(Programmer2);
angularProgrammer(500);