const getRollNo = () => {
    setTimeout( () => {
        console.log("Now its call one by one");
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((roll_no) => {
            const data = {
                name: "Debdut",
                techology: "React"
            }
            console.log(`My roll number is ${roll_no}, My name is ${data.name} and technology is ${data.techology}`);

            setTimeout( (gendar) => {
                data.gendar = "male";
                console.log(`I am alpha ${data.gendar}`);
            }, 2000, data.gendar);

        }, 2000, roll_no[1]);
    }, 2000);  
}

getRollNo();