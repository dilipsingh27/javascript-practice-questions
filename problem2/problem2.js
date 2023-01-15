// function allDigitSameOrNot(num) {
//    const arr = []
//    while(num!==0) {
//     arr.push(num%10)
//     num = (parseInt(num/10))
//    }

// //    console.log(arr)
//    let flag =1;
//    for(let i=1;i<arr.length;i++) {
//     if(arr[i]===arr[i-1])
//     continue;
//     else
//     {
//         flag=0;
//         break;
//     }
//    }

//    if(flag===1)
//    console.log("true")
//    else
//    console.log("false")

// }


const allDigitSameOrNot = (num) => {
    const arr = []
    while(num!==0) {
     arr.push(num%10)
     num = (parseInt(num/10))
    }
 
 //    console.log(arr)
    let flag =1;
    for(let i=1;i<arr.length;i++) {
     if(arr[i]===arr[i-1])
     continue;
     else
     {
         flag=0;
         break;
     }
    }
 
    if(flag===1)
    console.log("true")
    else
    console.log("false")
 
 }


allDigitSameOrNot(232)
allDigitSameOrNot(44444)
