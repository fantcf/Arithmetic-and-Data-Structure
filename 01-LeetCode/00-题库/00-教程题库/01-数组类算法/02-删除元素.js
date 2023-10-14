// 给定一个数字，删除数组中该数字；

// 方法1：通过
const removeElement1 = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;        // 由于删除了一个元素，后面的元素向前了一步；
            index++;    // 记录删除的个数；
        }
    }
    return nums;
}


// 方法2：记录非目标数字的元素的新下标
const removeElement2 = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index++] = nums[i];
        }
    }
    nums.splice(index)
    return nums;
}

const result1 = removeElement1([1,2,2,3], 2)
// console.log(result1);
const result2 = removeElement2([1,2,2,3], 2)
console.log(result2);