/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLength = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let streak = 0;
            while(set.has(currentNum)){
                streak++;
                currentNum++;
            }
            maxLength = Math.max(maxLength, streak);
        }
    }
    return maxLength;
};