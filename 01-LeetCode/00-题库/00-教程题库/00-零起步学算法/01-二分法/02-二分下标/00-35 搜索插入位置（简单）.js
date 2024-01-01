/**
题干：给定一个排序数组和一个目标值，
        在数组中找到目标值，
        并返回其索引。
        如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
        nums 为 无重复元素 的 升序 排列数组
示例 1:
    输入: nums = [1,3,5,6], target = 5
    输出: 2
示例 2:
    输入: nums = [1,3,5,6], target = 2
    输出: 1
示例 3:
    输入: nums = [1,3,5,6], target = 7
    输出: 4
*/

/**
分析：
    这题为什么可以用二分法做？
        二分法要求：1. 数组是已排序的；2. 数组中无重复要素；
    注意，插入位置需满足：nums[pos-1] < target <= nums[pos];
    核心：在一个有序数组中，找第一个大于等于 target 的下标
*/
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;   // ans数组length，保证万一在数组中找不到的时候，能返回最大的下标；
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};