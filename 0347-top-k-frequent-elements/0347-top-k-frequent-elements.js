/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let arr = Array.from(map.entries());

    arr.sort((a, b) => b[1] - a[1]);

    return arr.splice(0, k).map(item => item[0])
};