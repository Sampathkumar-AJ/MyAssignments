
var genderType ="female"; // globle declaration

function printgender(){

    let colour="brown" //function scope

if(genderType.startsWith("female")){
    var age=30;
    let color="pink";
    console.log("She/her favorite colour:" +color);
}else {
    var age=35;
    console.log("He/him favorite colour: " +color);

}

console.log("Displayed Age :", age);
}

printgender();
console.log(genderType);