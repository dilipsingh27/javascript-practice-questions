const problem6 = require('./problem6')

it("verify script ending with 'Script' ", () => {
    expect(problem6.isEndingWithWordScript('javaScript')).toBe(true);
    expect(problem6.isEndingWithWordScript('javascript')).toBe(false);

    expect(problem6.isEndingWithWordScriptArrow('javaScript')).toBe(true);
    expect(problem6.isEndingWithWordScriptArrow('javascript')).toBe(false);

})