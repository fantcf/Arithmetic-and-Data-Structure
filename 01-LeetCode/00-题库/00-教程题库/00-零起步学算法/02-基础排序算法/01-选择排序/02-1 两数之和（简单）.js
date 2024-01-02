/**
题干：
    给定一个整数数组 nums 和一个整数目标值 target，
    请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

    你可以按任意顺序返回答案。
示例1
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：
    输入：nums = [3,2,4], target = 6
    输出：[1,2]
示例 3：
    输入：nums = [3,3], target = 6
    输出：[0,1]
*/


// 暴力写法：
var twoSumBaoli = function (nums, target) {
    for (let i = 0; ; i++) 
        for (let j = i + 1; j < nums.length; j++)   // 枚举 i 右边的 j
            if (nums[i] + nums[j] === target)       // 满足要求
                return [i, j]; 
};

// 哈希写法：
var twoSumHash = function (nums, target) {
    let idx = new Map(); // 创建一个空哈希表
    for (let j = 0; j < nums.length; j++) { // 枚举 j
        const x = nums[j];
        // 在左边找 nums[i]，满足 nums[i]+x=target
        if (idx.has(target - x)) {
            return [idx.get(target - x), j];
        }
        idx.set(x, j); // 保存 nums[j] 和 j
    }
};