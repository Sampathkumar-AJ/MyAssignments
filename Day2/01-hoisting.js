//Hoisting


//Variable
// console.log(x);
// var x=10;

/*
 var x; //hoisted goes to the top and remains defined
 console.log(x);//undefined
 x=10; */

//  console.log(x);
//  let y=10;

console.log(z)
const z=10;

// hoisting happens in let and const also but it throws reference error.. Modern Java

/* Explanation:
let and const are also hoisted but not initialized

They exist in a temporal dead zone*

*/


// Named function
function julyBatch(){
    //console.log("Hellow Team");

    let a = 10;
    const b=20;
    return a+b;
}

//julyBatch();
console.log(julyBatch());