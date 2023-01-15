const problem8 = require('./problem8')

it("count the number of vowel in string", () => {
    expect(problem8.countVowel('codeacademy')).toBe(5);
    expect(problem8.countVowel('dilipSIngh')).toBe(3);

    expect(problem8.countVowelArrow('codeacademy')).toBe(5);
    expect(problem8.countVowelArrow('dilipSIngh')).toBe(3);

})