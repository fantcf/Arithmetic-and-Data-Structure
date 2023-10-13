// 数组去重，返回新数组长度；

/**
 * @params {number[]} nums
 * @return {number} 
 */
const removeDuplicates = function(nums) {
    return [...new Set(nums)];
}
const result = removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]);
console.log(result);
/**
 * 解题思路
 * 1. 数组去重，首先想到Set对象； 
 */ 


 const removeDuplicates2 = function(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if(!arr.includes(nums[i])) arr.push(nums[i])
    }
    return arr;
}
const result2 = removeDuplicates2(nums = [0,0,1,1,1,2,2,3,3,4]);
console.log(result2);

const removeDuplicates3 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    }
    return nums.length;
}
const result3 = removeDuplicates3(nums = [0,0,1,1,1,2,2,3,3,4]);
console.log(result3);
