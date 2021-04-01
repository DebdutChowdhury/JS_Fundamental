// Call methos takes arguments separately

const Programmer1 = {
    name: "Debdut",
    technology : "React",
    feature : function(codeLine){
        console.log(`Hello I am ${this.name}, my technology is ${this.technology}
                    , I wrote ${codeLine} line everyday.`);
    }
}

// Programmer1.feature(500);

const Programmer2 = {
    name : "Ashwini",
    technology : "Angular",
}

Programmer1.feature.call(Programmer2, 1000);