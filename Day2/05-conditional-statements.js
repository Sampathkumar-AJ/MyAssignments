// function findNumberType(number){

//   if(number > 0){
//         console.log("Its a positive number")
//     }
//   else if(number === 0){
//         console.log("Its a neutral number")
//   }

//    else if(number < 0){
//         console.log("Its a negative number")
//   }

// }

//findNumberType(-20);

// function findNumberType(number){

//     switch(true){
//         case number>0:
//         console.log("Its a Positive");
//         break

//         case number===0:
//         console.log("Its a neutral");
//         break

//         case number<0:
//         console.log("Its a negative");
//         break

//         default:
//         console.log("Check your input");
//     }

    
// }

//  findNumberType(0)

// ************Assignment****///////////////////

 function browserType(browser){

    switch(browser)
    {
        case 'Chrome':
        console.log("Running test on Chrome");
        break;

        case 'Firefox':
        console.log("Running test on Firefox");
        break;

        case 'Edge':
        console.log("Running test on Edge");
        break;

        case 'Safari':
        console.log("Running test on Safari");
        break;

        default:
        console.log("Unknown browser type");
    }

    
}

browserType('Chrome');