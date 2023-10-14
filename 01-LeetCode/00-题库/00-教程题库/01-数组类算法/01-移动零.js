// 将所给数组中的零全移到末尾；
// 如：将[0,1,0,3,12] -> [1,3,12,0,0] 

// 解法1：通过记录count；
// 注意：删除一个零之后，要从nums[i - 1]的地方重新比较是否为零；
const moveZeroes1 = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i--;
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0);
    }
    return nums;
}

// 解法2: 用下标index记录非零个数；将所有非零元素放在前面，如第一个非零数放在index为0的位置，第二个放在index为1的位置；
const moveZeroes2 = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];    // 相当于 nums[index] = nums[i];
        }                               //        index++;
    }
    while(index < nums.length) {
        nums[index++] = 0;
    }
    return nums
}
const result1 = moveZeroes1([0,1,0,3,12])
// console.log(result1);
const result2 = moveZeroes2([1,0,3,12])
console.log(result2);