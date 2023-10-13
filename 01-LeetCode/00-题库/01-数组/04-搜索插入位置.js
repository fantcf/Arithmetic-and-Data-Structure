
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target);
    if (index > -1) {
        return index;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                nums.splice(i, 0, target);
                return i;
            }
            if (i === nums.length - 1) {
                nums.push(target);
                return nums.length - 1;
            }
        }
    }
}
const result = searchInsert(nums = [1,3,5,6], target = 2)
console.log(result);

// 简洁解题
const searchInsert2 = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      if(target <= nums[i]) {
        return i
      }
    }
    return nums.length
};