const Person = (fst, lst, age, bdate) => {
    this.fstname = fst;
    this.lstname = lst;
    this.age = age;
    this.bdate = bdate;
}

Person.prototype.name = function(){
    return this.fstname + " " + this.lstname;
};

let myfather = new Person("Vishal", "Kumar", 34, 2005);
console.log("My father is " + myfather.name());