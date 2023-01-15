function replaceCharacter(word) {
    let newWord=''
    word.split('').forEach(char => {
        let unicode = char.charCodeAt()
        unicode===90?unicode=64:null
        unicode===122?unicode=96:null
        let replacedChar = String.fromCharCode(unicode+1)
        newWord+=replacedChar

    })
    return newWord
}


const replaceCharacterArrow = (word) => {
    let newWord=''
    word.split('').forEach(char => {
        let unicode = char.charCodeAt()
        unicode===90?unicode=64:null
        unicode===122?unicode=96:null
        let replacedChar = String.fromCharCode(unicode+1)
        newWord+=replacedChar

    })
    return newWord
}

console.log(replaceCharacter('codeacademy'))
console.log(replaceCharacter('dilipSIngh'))


module.exports = {
    replaceCharacter:replaceCharacter,
    replaceCharacterArrow:replaceCharacterArrow
}