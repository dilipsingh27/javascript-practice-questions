const problem4 = require('./problem4.js')

it("find longest string from array of strings" , () => {

    expect(problem4.longestString(['llll','ll','lll'])).toBe('llll');
    expect(problem4.longestString(['abbb','aa','a'])).toBe('abbb');

    expect(problem4.longestStringArrow(['llll','ll','lll'])).toBe('llll');
    expect(problem4.longestStringArrow(['abbb','aa','a'])).toBe('abbb');
})