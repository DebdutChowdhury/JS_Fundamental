const a=new Promise((reslove,reject)=>{
    setTimeout(()=>apicall(),2000)
    function apicall(){
    console.log("inside A");
    var a=true
    if(a){
        reslove("data fro promise")
    }
    else{
        reject("error from promise")
    }
    }

})

a.then(data=>{
    console.log("data==>",data);
    b()
})
.catch(err=>{
console.log("err===>",err);
})
function b(){
    console.log("inide B");

}