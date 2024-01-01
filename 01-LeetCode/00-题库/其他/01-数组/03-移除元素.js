// 题干：移除nums中的val

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    const arr = [];
    for (let num of nums) {
        if (num !== val) arr.push(num);
    }
    return arr;
}
const result = removeElement([3,2,2,3], 3);
console.log(result);