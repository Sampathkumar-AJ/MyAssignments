/*
 String Declaration

 1. String Literal
 2. 

*/ 


let firstName1 = new String("Sampath")
let username1 = new String("Sampath")


//  String Methods

// Escape Sequesnces


// concatenation -- concat()

let testCaseName = " Create new Lead"
let testCaseId = 123
let result = testCaseId.toString().concat(testCaseName)
console.log(result);
// with +

let result1 = testCaseId+" - "+testCaseId+" passed in the last execution"
console.log(result1);

//Template literals = '${}'
let testcases = 200;
let output = `There are ${testcases} testcases`
console.log(output);

// Length

let courseName = "Playwright"

//length  - Starts with 1  - the length of the courseName is 10
//Index - Starts with 0 - The index of "t" is 9

console.log(`The length of the string is ${courseName.length}`);

// charAt()

console.log(`The chatAt of 2 of the string is ${courseName.charAt(2)}`);

// indexOf()

console.log(`The indexof of a ${courseName.indexOf('a')}`);


//split()

let companyname = "Qeagle Assurance Limited"
let splitCompanyNameAsArray = companyname.split("");
console.log(splitCompanyNameAsArray);

// slice()

let courseName1 = "Playwright"
        //index    0,1,2,3,4,5,6,7,8,9
//reverse index    -10,-9,-8,-7,-6,-5,-4,-3,-2,-1

let outputSlice1 = courseName1.slice(2,4)// ay
console.log(outputSlice1);

let outputSlice2 = courseName1.slice(-4,-2) // ig
console.log(outputSlice2);

let outputSlice3 = courseName1.slice(-6) // wright
console.log(outputSlice3);

/*
Note: 
1. start index included and end index is not included also optional
2. Negative index is allowed, the count starts from the -1 
 */

// substring()
let courseName3 = "Playwright"
let outSubString = courseName3.substring(3,5) //yw
console.log(outSubString);

let outSubString1 = courseName3.substring(5,3)// yw
console.log(outSubString1);

let outSubString2 = courseName3.substring(5,-3)// equivalant to "5,0" Playw negative values considered as "0
console.log(outSubString2);

/*
Note: 
1. Start index included and end index is not included also it is optional
2. Does not support negative index instead it treats as "0"
3. Swapping can be done between your start and end indices
*/

// Reverse a string

let orgName = "TestLeaf"

function reverseString(){

    let chars = orgName.split("");
    console.log(chars);

    let reverse = "";

    for (let index  = chars.length-1; index >=0; index--)      
    {
        reverse = reverse+chars[index] // char[7] = char[6]=a,char[5]=e,char[4]=L,char[3]=t ...etc
    }
     
    return reverse;
    

}
console.log(reverseString());








