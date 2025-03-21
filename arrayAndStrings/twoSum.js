/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    var num_lookup = {};
    if (nums.length < 2){
        return [];
    }
    for(let i = 0; i < nums.length; i++) {
        compliment = target - nums[i];
        if (compliment in num_lookup) {
            return [num_lookup[compliment], i]
        }
        num_lookup[nums[i]] = i;
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));