function isLeapYearOrNot(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)

}

const isLeapYearOrNotArrow = (year) => (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)



// console.log(isLeapYearOrNot(2000))
// console.log(isLeapYearOrNot(1999))

module.exports = {
    isLeapYearOrNot:isLeapYearOrNot,
    isLeapYearOrNotArrow:isLeapYearOrNotArrow
}