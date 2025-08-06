let batonDeivery = new Promise((resolve,reject)=>{

    let isBatonPassed = false;

    if (isBatonPassed) {
        resolve("Baton is successfully handed over")
    } else {
        reject("The baton was dropped")
    }

})

batonDeivery
.then(message=>{
    console.log(message);  
})

.catch(error=>{
    console.log(error);
    
})


///////Assignments---

// Functiona Declaration

// Named function 
 let userName="tester";
function userProfile(name) {
  console.log(`Hello ${userName}!`);
}
userProfile()

// Arrow function

let x = 15;
const double = (x) => {

    console.log("Double the value of x = " + (x*2));
}

double(x)

// Call back

let anonFun = function(){


    setTimeout(()=>{

        console.log("This message is delayed by 5 sec")
    }), 5000;
}

anonFun()






