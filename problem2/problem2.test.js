const { default: expect } = require('expect');
const problem2 = require('./problem2');

it('is all digit same or not of a number', () => {

    expect(problem2.isAllDigitSame(2222)).toBe(true);
    expect(problem2.isAllDigitSame(1233)).toBe(false);

    expect(problem2.isAllDigitSameArrow(2222)).toBe(true);
    expect(problem2.isAllDigitSameArrow(1233)).toBe(false);

})