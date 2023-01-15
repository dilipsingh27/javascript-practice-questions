// function convert(sentence) {
//     // to split the string into array of substring
//     let myArr = sentence.split('')
//     let SENTENCE = ''
//     const regex = /[A-Z]/
//     myArr.forEach(char => {
//         regex.test(char)?SENTENCE+=char.toLowerCase():SENTENCE+=char.toUpperCase()
//     })
//     return SENTENCE
// }


const convert = (sentence) => {
    // to split the string into array of substring
    let myArr = sentence.split('')
    let SENTENCE = ''
    const regex = /[A-Z]/
    myArr.forEach(char => {
        regex.test(char)?SENTENCE+=char.toLowerCase():SENTENCE+=char.toUpperCase()
    })
    return SENTENCE
}

console.log(convert("MeRRy hAD a LITTle lAMp"))
