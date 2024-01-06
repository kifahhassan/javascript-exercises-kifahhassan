const removeFromArray = function(array, ...args) {
let newArray = [];

for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
        newArray.push(array[i]);
    }
}
return newArray;
};


//create a new array inside function to input non items
//create a function that goes through each item, if the item is not included in the args, then add to new array
//return new array

// Do not edit below this line
module.exports = removeFromArray;
