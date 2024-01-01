/**
题目：704. 二分查找
题干：给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
        写一个函数搜索 nums 中的 target，
        如果目标值存在返回下标，否则返回 -1。
示例 1:
    输入: nums = [-1,0,3,5,9,12], target = 9
    输出: 4
    解释: 9 出现在 nums 中并且下标为 4

示例 2:
    输入: nums = [-1,0,3,5,9,12], target = 2
    输出: -1
    解释: 2 不存在 nums 中因此返回 -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
分析：使用“二分法”的前提：1. 是有序数组；2. 数组中无重复元素；
      区间的定义就是不变量，while寻找中每一次边界的处理都要坚持根据区间的定义来操作，这就是循环不变量规则
      重点：始终坚持根据查找区间的定义来做边界处理；
*/

// 做法1：在循环体中查找元素 -> 使用闭区间：[left, right]；
    // while(left <= right); left == right 有意义，不断缩小区间
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        const num = nums[mid];
        if (num === target) return mid;
        else if (target < num) right = mid - 1;
        else if (target > num) left = mid + 1;
    }
    return -1;
};


// 做法2：在循环体中排除目标元素一定不存在的区间 -> 使用闭区间：[left, right）；
    // while(left < right); left == right 没有意义，
    // 向下取整的时候，改变的是
var searchExc = function(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left;
        const num = nums[mid]
        if (target == num) return mid;
        if (target < num) right = mid;
        if (target > num) left = mid + 1;
    }
    return -1;
}

// 做法3：递归；
        // 先找mid，判断nums[mid] == target？是就返回；
        // 不是就比较target和nums[mid]大小，target小，就改变right = mid - 1；target大，就left = mid + 1；
var searchRecur = function (nums, target) {
    return search_interval(nums, target, 0, nums.length - 1)
};

function search_interval(nums, target, left, right) {
    if (left > right) {
        return -1
    }
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {//判断目标值和中间元素的大小
        return mid
    } else if (nums[mid] < target) {//递归寻找目标元素
        return search_interval(nums, target, mid + 1, right)
    } else {
        return search_interval(nums, target, left, mid - 1)
    }
}

let nums = [-1,0,3,5,9,12], target = 12;
searchExc(nums, target);