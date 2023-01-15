function concatenateTwoString(arrays) {
    return arrays[0].slice(1) + arrays[1].slice(1)
}

const concatenateTwoStringArrow = (arrays) => arrays[0].slice(1) + arrays[1].slice(1)

// console.log(concatenateTwoString(['code', 'academy']))

module.exports = {
    concatenateTwoString:concatenateTwoString,
    concatenateTwoStringArrow:concatenateTwoStringArrow
}