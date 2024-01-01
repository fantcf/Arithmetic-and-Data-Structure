/**
题目：搜索插入位置；
题干：给定一个排序数组nums和一个目标值target，在数组中找到目标值，返回索引；找不到目标值，按顺序插入位置；
示例 1:
    输入: nums = [1,3,5,6], target = 5
    输出: 2

示例 2:
    输入: nums = [1,3,5,6], target = 2
    输出: 1

示例 3:
    输入: nums = [1,3,5,6], target = 7
    输出: 4
 */ 


/**
参考思路：
    核心：不断找中间值，和k进行比对，如果k比中间值小，那么就说明中心值->右侧都没有用，直接将右侧下标变成中心值小标-1
 */ 
// 标签：数组、二分查找
function searchInsert(nums, k) {
    let l = 0, r = nums.length - 1;
    while(l <= r) {
        let mid = Math.floor((l+r) / 2);
        if (nums[mid] === k) {
            return mid;
        }
        if (k < nums[mid]) {
            r = mid - 1;
        }
        if (k > nums[mid]) {
            l = mid + 1;
        }
    }
    return l;
}


/**
读题思路：
    如果x大于nums[i]，就继续循环，直至找到小于或等于nums[i]的位置；
 */ 

function test1(nums, k) {
    let i = 0;
    while(k > nums[i]) {
        i++;
    }
    return i;
}