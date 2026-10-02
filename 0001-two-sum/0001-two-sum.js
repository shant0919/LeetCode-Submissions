/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = new Map();
    for(let i=0;i<nums.length;i++){
        let t = target - nums[i];
        if(seen.has(t)){
            return [i, seen.get(t)];
        }
        seen.set(nums[i], i);
    }
    return []
};