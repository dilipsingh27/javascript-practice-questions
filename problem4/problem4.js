function longestString(arr) {
    let largest  = '';
    arr.forEach(element => {
        element.length>largest.length?largest=element:null
    })
    return largest
}

const longestStringArrow = (arr) => {
    let largest  = '';
    arr.forEach(element => {
        element.length>largest.length?largest=element:null
    })
    return largest
}

// console.log(longestString(['llll','ll','lll']))

module.exports = {
longestString:longestString,
longestStringArrow:longestStringArrow
}