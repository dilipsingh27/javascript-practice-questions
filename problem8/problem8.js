function countVowel(word) {
    let count = 0;
    const regex = /[a,e,i,o,u,A,E,I,O,U]/
    word.split('').forEach((char) => {
        regex.test(char)?count+=1:null
    })
    return count
}


const countVowelArrow = (word) => {
    let count = 0;
    const regex = /[a,e,i,o,u,A,E,I,O,U]/
    word.split('').forEach((char) => {
        regex.test(char)?count+=1:null
    })
    return count
}
console.log(countVowel("codeacademy"))
console.log(countVowel("dilipSIngh"))

module.exports = {
    countVowel:countVowel,
    countVowelArrow:countVowelArrow
}