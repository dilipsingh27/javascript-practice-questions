const problem9 = require('./problem9')

it("replacing the character with the next character in the string", () => {
    
    expect(problem9.replaceCharacter('codeacademy')).toBe('dpefbdbefnz');
    expect(problem9.replaceCharacter('dilipSIngh')).toBe('ejmjqTJohi');

    expect(problem9.replaceCharacterArrow('codeacademy')).toBe('dpefbdbefnz');
    expect(problem9.replaceCharacterArrow('dilipSIngh')).toBe('ejmjqTJohi');

})