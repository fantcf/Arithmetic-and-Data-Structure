/**
 * 散列初始题：查询目标数的两个加数；
 * 详细：给定一个整数数组nums，再给定一个目标值target，查找整数数组nums中找出和为目标值target的两个数的下标；
 */ 
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i]
        }
        map.set(nums[i], i);
    }
}

const result = twoSum([2,3], 5);
console.log(19 % 10);