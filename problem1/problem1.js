// function largestEven(arr) {
//     let max = -1;
//     for(let i=0;i<arr.length;i++) {
//         if((arr[i]%2)===0)
//         {   
//             if(arr[i]>max)
//             max = arr[i];
//         }
//     }
//     if(max !== -1)
//     console.log(max)
//     else
//     console.log("Even number doesn't exist")
// }

// largestEven([1,2,3,4,5])

 const isEven = (number) => number%2===0

function largestEven(numbers) {
    let largestEven = -1;
    numbers.forEach(number => {
        switch(isEven(number)) {
            case true: largestEven=Math.max(largestEven,number)
            break;
        }
    });

    return largestEven

}


const largestEvenArrow = (numbers) => {
    let largestEven = -1;
    numbers.forEach(number => {
        switch(isEven(number)) {
            case true: largestEven=Math.max(largestEven,number)
            break;
        }
    });

    return largestEven

}

module.exports = {
    largestEven:largestEven,
    largestEvenArrow:largestEvenArrow
}

// largestEven([1,2,3,4,5])