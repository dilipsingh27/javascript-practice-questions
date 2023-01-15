const problem1=require("./problem1");

it("find largest number in an array", () => {
    
    expect(problem1.largestEven([11,15,18,3])).toBe(18);
    expect(problem1.largestEven([1,0,-1])).toBe(0);

    expect(problem1.largestEvenArrow([1,2,3,5,4,8])).toBe(8);
    expect(problem1.largestEvenArrow([1,3,9])).toBe(-1);

})