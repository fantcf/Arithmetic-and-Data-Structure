// 题干：在nums中找到两个和为target的元素，返回其下标； 


/**
 * @params {number[]} nums
 * @params {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const result = nums[i] + nums[j];
            if (result === target) {
                return [i, j]
            }
        }
    }
}
const result = twoSum(nums = [2,5,5,11], target = 10)
console.log(result);

/**
 * 思路
 * 1. 找一个数组中的某个元素，即需要一次循环遍历；
 * 2. 找两次不同的元素，即需要两次循环遍历；
 * 3. 以第一次为主，再进行第二次遍历；
 * 4. 注意，为了避免一个下标重复两次，第二次遍历起始位置应该在第一次遍历下标之后，j不能包含i下标；
 */ 

/**
 * 错误：[2, 5, 5, 11] -> 10
 * 错误原因：因为j是从1开始，那么就会有如i是1， j也是1的情况；
 * 解决错误：i从0开始，但是j应该从i开始的位置开始，防止重复；
 */