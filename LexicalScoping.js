let a  = "In global"

function one(){
    let b = "in one function";
    console.log(b);
    two();
        
        function two(){
            let c = "in the two function";
            console.log(a+b+c);
            
        }
}

function three(){
    let d = "in three functio"
    console.log(a+d);
}

one();