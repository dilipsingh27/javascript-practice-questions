// function isEndingWithWordScript(word) {
//     let wordLength = word.length
//     let scriptIndex = word.length - 6;
//     if(scriptIndex<=0) return false
//     return word.slice(scriptIndex) === 'Script'
// }


const isEndingWithWordScript = (word) => {
    let wordLength = word.length
    let scriptIndex = word.length - 6;
    if(scriptIndex<=0) return false
    return word.slice(scriptIndex) === 'Script'
}

console.log(isEndingWithWordScript('javaScript'))
console.log(isEndingWithWordScript('javascript'))