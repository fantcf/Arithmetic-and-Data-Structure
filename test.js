function removeDuplicates(nums) {
    // 使用Set去重得到不重复的元素集合
    const uniqueSet = new Set(nums);

    // 统计元素在原始数组中的出现次数并构成元组列表
    const countList = Array.from(uniqueSet).map(num => [num, nums.filter(n => n === num).length]);
    console.log(countList);

    // 对元组列表进行排序，首先按照出现次数从高到低排序，次数相同按照第一次出现的顺序排序
    countList.sort((a, b) => b[1] - a[1] || nums.indexOf(a[0]) - nums.indexOf(b[0]));

    // 构建去重排序后的结果数组
    const result = countList.map(([num, count]) => num);

    return result;
}

// 测试样例
const nums = [1, 3, 3, 3, 2, 4, 4, 4, 5];
const result = removeDuplicates(nums);
console.log(result.join(','));


