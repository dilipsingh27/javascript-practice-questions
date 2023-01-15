const problem5 = require('./problem5')

it("verify is leap year or not ", () => {

    expect(problem5.isLeapYearOrNot(2000)).toBe(true);
    expect(problem5.isLeapYearOrNot(1999)).toBe(false);

    expect(problem5.isLeapYearOrNotArrow(2000)).toBe(true);
    expect(problem5.isLeapYearOrNotArrow(1999)).toBe(false);
})