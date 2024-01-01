/**
题目：寻找数组的中心索引
题干：
    给定一个数组nums，计算数组的中心下标；
    1. 下标左侧的和等于下标右侧的和；
    2. 如果下标为0，那么左侧和为0，右侧和也需要为0；反之，如果下标为length-1，则右侧和为0，左侧和也需要为0；
    3. 如果有多个中心点下标，那么返回最左边的；

示例 1：
    输入：nums = [1, 7, 3, 6, 5, 6]
    输出：3
    解释：
    中心下标是 3 。
    左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
    右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

示例 2：
    输入：nums = [1, 2, 3]
    输出：-1
    解释：
    数组中不存在满足此条件的中心下标。

示例 3：
    输入：nums = [2, 1, -1]
    输出：0
    解释：
    中心下标是 0 。
    左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
    右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
 */


/**
读题思路：
    1. 找恒等关系式：
        1.1 总和是不会变的；总和 = 左侧和 + 当前下标值 + 右侧和；
        1.2 左侧和应该等于右侧和：左侧和 = 右侧和；
        1.3 更新总和：总和 = 2 * 左侧和 + 下标值；
    2. 是否有循环：有循环，由于不确定中心下标是哪个，所以需要通过循环来判断；
    3. 循环目的：找到满足恒等式关系下标点；
核心：
    在于循环内容：找到满足恒等式的下标就返回，否则呢？
        否则，就将nums[i]加入到左侧sum中；这步很关键；
 */


// 标签：数组、前缀和

// 参考答案：
/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndexEx(nums) {
    const total = nums.reduce((p, n) => p + n);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum*2 + nums[i] === total) return i;
        sum += nums[i];
    }
    return -1;
}


// 解答1
function pivotIndex(nums) {
    const sum = nums.reduce((p, n) => p + n);
    let i = 0;
    while (i < nums.length) {
        const sideSum = (sum - nums[i]) / 2;
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        if (sideSum === leftSum) {
            return i;
        } else {
            i++;
        }
    }
    return -1;
}

// 解答2
function pivotIndex1(nums) {
    const sumFromOne = nums.reduce((p, n) => p + n) - nums[0];
    if (sumFromOne === 0) return 0;
    for (let i = 1; i < nums.length - 1; i++) {
        let left = 0, right = 0;
        for (let j = 0; j < i; j++) {
            left += nums[j];
        }
        for (let j = nums.length - 1; j > i; j--) {
            right += nums[j]
        }
        if (left === right) return i;
    }
    const sumBeforeLastOne = nums.reduce((p, n) => p + n) - nums[nums.length - 1];
    if (sumBeforeLastOne === 0 ) return nums.length - 1;
    return -1;
};
