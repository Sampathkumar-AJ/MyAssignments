let x = 10;

x+=5;
console.log(x); // 15

x-=5;
console.log(x); // 10

x*=5;
console.log(x); // 10

let value = 10;
// Post Increment  = value++=> value+1
console.log(value++);


/* Strict equality "=="
1. compare data type
2. compares the values */

/* Non Strict equality//loose equality
1. compare data type
2. compares the values not datatype */


console.log(1===1);//true

console.log(1==="1");//false

console.log("chrome"==="Chrome");//false, due to case sensitivity

console.log(1=="1");//true, because in true equality your datatype get converted 

console.log(1==true);//true, true, because in true equality your boolean get converted to number 

console.log(1===true);//false, here in the boolean its not converted

console.log(1=="true");//false, here in the boolean its not converted
