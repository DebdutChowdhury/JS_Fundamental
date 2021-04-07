//ARRays
//TRaversal in array
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // console.log(myFriends[1]);
        // console.log(myFriends[myFriends.length -1]);

//Array length
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // console.log(myFriends.length);

//we use for loop to navigate
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // for(var i = 0 ; i < myFriends.length ; i++)
        // {
        //         console.log(myFriends[i]);
        // }

//for in loop (EMCscript 2015 ES6 instroduced)
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // for (let elements in myFriends)   //provide the index number of an array
        // {
        //     console.log(elements);
        // }

//for of loop
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // for (let elements of myFriends) //provide the data available in the array
        // {
        //     console.log(elements);
        // }

//forEach()
//calls a function for each elements in an array
//call back fuction
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // myFriends.forEach(function(elements , index , array){
        //     console.log(elements + " index : " + index + " " + array);
        // }) ;

// For Each loop using fat arraow function 
        // var myFriends =['Ashwini','Debdut','Preethi','vishal'];
        // myFriends.forEach((elements , index , array) =>{
        //     console.log(elements + " index : " + index + " " + array);
        // })

//Array.prototype.indexOF ()

    //return the first (least) index of an element within the array equal
    //to an element, or -1 if none is found. It search the element from the 0th index number
        
        // var myFirstName = ["Ashwini","vishal","sweety","Debdut","Ashwini"];
        // console.log(myFirstName.indexOf("sweety"));
        // console.log(myFirstName.lastIndexOf("vishal"));
        // console.log(myFirstName.includes("Ashwini"));

//Array.prototype.find()
       
    //arr.find(callback(element[,index[,array]])[,thisArgs])
        
    //Returns the found element in the array, if some element in the
    // array satisfies the testing function, ot undefined if not found.
    //only problem is that it return only one element
        
        
        // const price =[200,300,350,400,450,500,600];
        // console.log(price.find((currVal) => currVal < 400)); //undefind
        // console.log(price.findIndex((currVal) => currVal < 100));  //-1
        

//Array.prototype.filter()
    //retruns a new array containing all elements of the calling
    //array for which the provided filtering function retruns true.
    //if the condition is not satisfied it returns [] empmty array.

    //price < 400;
        // const price =[200,300,350,400,450,500,600];

        // const newPriceTag = price.filter((elem, index) =>{
        //     return elem < 400;
        // })
        // console.log(newPriceTag);

//Array.prototype.sort()

        // const months = ['March','Jan','Feb','Dec','Nov'];
        // console.log(months.sort());

//Array Perform CURD operations

//Array.prototype.push()
    //push() method adds one or more elements to the end of an array
    //returns the new length of the array
        
        // const animals = ['pigs','goats','sheep'];
        // //const count = animals.push('chicken');
        
        //  const count = animals.push('chicken','cats','cow');
        // console.log(animals);
        // console.log(count);


//Array.prototype.unshift()
    //unshift() method adds one or more elements to the start of an array
     //returns the new length of the array
        
        // const animals = ['pigs','goats','sheep'];
        // animals.unshift('buffaloo');
        // console.log(animals);


//Array.prototype.pop()
    // the pop() mehode removes the last element from the array
    // this methods changes the length of the array
        
        // const plants =['broccoli','cauliflower','kale','tomato','cabbage'];
        // console.log(plants);
        // console.log(plants.pop());
        // console.log(plants);
    
//Array.prototype.shift()
    //the shift() mehode removes the first element from the array
    //this methods changes the length of the array

        // const animals = ['pigs','goats','sheep'];
        // animals.shift();
        // console.log(animals);

//Array.prototype.splice
    //splice() mthode adds or remove the elements from an array
        
        // const month =['jan','march','april','june','july'];    
        //  const newMonth = month.splice(month.length, 0, "dec");
        // console.log(month);
        // console.log(newMonth);

//Array.prototype.map()

    //let newArray = arr.map(callback(currentvalue[,index[,array]]))
    //            //retrun elemts for newArray, after executing something
    //}[,thisArg]);
        
    //Returns a new array containing the results of calling a
    //function on every elemnts in this array
        
        // const array1= [1,4,9,16,25];
        // let newArr = array1.map((currentelem , index, arr) =>{
        
        //     return currentelem > 9;
        // }) ;
        
        // console.log(array1);
        // console.log(newArr); // retruns boolean value
        

        // let newArr = array1.map((currentEle,index, arr) =>{
        //     return ` index no = ${index} and the value is ${currentEle} belong to ${arr}`
        //  });
        // console.log(array1);
        // console.log(newArr);


//foreach returns the undefined
        // let newArrfor = array1.forEach((currentEle,index, arr) =>{
        //         return ` index no = ${index} and the value is ${currentEle} belong to ${arr}`
        //     });
        //  console.log(array1);
        //  console.log(newArrfor);
        
        //it return a new array without mutating the original array.


//REduce methode
        //flatten an array means to convert the 3d or 2d array into a 
        //single dimensional array
        //the reduce() method excecutes a reducer function(that you provide)
        //on each element of the array, resulting in single output value
        
        //the reducer function takes four arguments:
        //Accumaulator(jama karna)
        //current Value
        //current Index
        //source array
        
                // let arr = [5,6,2];
                // let sum =arr.reduce((accumulator, curElem) => accumulator += curElem , 7)
                // console.log(sum);