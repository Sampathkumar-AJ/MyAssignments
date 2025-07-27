// Named function


function funName1(a,b){
//let a = 10;
//let b = 10
return a+b

}

console.log(funName1(10,10))

// Anonumous Function / Function Expression : ---No Hoisting

// Named function 
function funName2(){
console.log("Hello team this is a named function");
}
funName2()

//Anonumous Function ---No Hoisting
 let x = "10";

 let funName3= function (){

    console.log("Hello team this is a anonymous function");
 }

funName3()

//Arrow Function ---No Hoisting
 

 let funName4 = () => { //fat arrow replace tge function keyword

    console.log("Hello team this is a arrow function");
 }

funName4()

// single line arrow function

const funName5 = (a,b) => a*b;


console.log(funName5(2,2)) 