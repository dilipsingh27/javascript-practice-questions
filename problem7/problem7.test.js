const problem7 = require('./problem7')

it("concatenate two string into one", () => {
    expect(problem7.concatenateTwoString(['code', 'academy'])).toBe('odecademy');
    expect(problem7.concatenateTwoString(['goa', 'mysore'])).toBe('oaysore');

    expect(problem7.concatenateTwoStringArrow(['code', 'academy'])).toBe('odecademy');
    expect(problem7.concatenateTwoStringArrow(['goa', 'mysore'])).toBe('oaysore');

})