// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
const productExceptSelf = (num_arr) => {
    let outPutArr = new Array(num_arr.length).fill(1);
    let prefix = 1;
    let suffix = 1;
    // First Pass: compute the product of all the elements left.
    for (let i = 0; i < num_arr.length; i++) {
        outPutArr[i] *= prefix;
        prefix *= num_arr[i];
    }
    // Second Pass: compute the product of all the elements right.
    for (let i = num_arr.length - 1; i >= 0; i--) {
        outPutArr[i] *= suffix;
        suffix *= num_arr[i];
    }
    return outPutArr;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]