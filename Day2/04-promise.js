// let batonDelivery = new Promise((resolve, reject)=>{
// let isbatonPassed = true;

// if (isbatonPassed){
// resolve("Boton is successfully handed over")

// }else {

//     reject("The batorn was dropped")
// }

// })
// .batonDelivery
// .then(message=>{

// })


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






