// 选择排序
// 本质上，就是不断找剩余元素中，最小的元素。
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {       // 和冒泡排序一样，不需要循环len-1次，因为最大的数，会在找倒数第二大的数的时候找到；
        minIndex = i;                         // 为什么是i而不是0？因为根据“循环不变量”，每次找完最小数之后，i会变大，但[0,i)里面永远都是顺序的；
        for (var j = i + 1; j < len; j++) {   // 为什么从i+1开始？因为i+1前面的数是顺序的，不需要再比较了；
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数；
                minIndex = j;                 // 更新最小数索引；
            }
        }
        temp = arr[i];                        // 保存当前大数；
        arr[i] = arr[minIndex];               // 将最小数放到当前i的位置；
        arr[minIndex] = temp;                 
    }
    return arr;
}
const res = selectionSort([3,2,1,4,5,6,9,7])
