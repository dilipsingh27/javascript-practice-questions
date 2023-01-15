const problem3 = require('./problem3');

it("convert lowercase into uppercase or vice versa", () => {

    expect(problem3.convert('MeRRy hAD a LITTle lAMp')).toBe("mErrY Had A littLE LamP");
    expect(problem3.convert("My NAme Is DiLIp")).toBe('mY naME iS dIliP');

    expect(problem3.convertArrow('MeRRy hAD a LITTle lAMp')).toBe("mErrY Had A littLE LamP");
    expect(problem3.convertArrow("My NAme Is DiLIp")).toBe('mY naME iS dIliP');
})