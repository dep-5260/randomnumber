function gen(num, max) {
    if (!max) {
        if (isNaN(num)) throw new Error("The number provided is not a number");
        return Math.floor(Math.random() * Number(num))
    } else {
        if (isNaN(num)) throw new Error("The number provided is not a number");
        if (isNaN(max)) throw new Error("The number provided is not a number");
        if (num >= max) throw new Error("Minimum number was bigger than max.");

        return Math.floor(Math.random() * (Number(max) - Number(num)) + Number(num));
    }
};

function randomFromArray(array) {
    if(!array) {
        throw new Error('The array isn\'t specified')
    }
    if(!Array.isArray(array)) {
        throw new Error("array variable was not actually an array. Please check your input again");
    }
    return array[Math.floor(Math.random() * array.length)]
};

module.exports = {
    gen,
    randomFromArray
}