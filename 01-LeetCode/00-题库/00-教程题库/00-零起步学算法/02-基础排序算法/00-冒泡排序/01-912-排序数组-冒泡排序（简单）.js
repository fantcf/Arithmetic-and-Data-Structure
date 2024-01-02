
// 本质上，就是一次大循环，两两比较，找一个最大值；
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {         // 不需要循环所有元素，因为最后一次，比较的应该是找最小的元素，找到了第二小的元素，其实就找到了最小的元素了；
        for (var j = 0; j < len - 1 - i; j++) { // 不需要循环所有元素，因为大循环了一次，就表示找到了一个最大数，循环了i次，就表示找到了i个依次最大数；
            if (arr[j] > arr[j+1]) {            // 如果前面一个元素比后面一个元素大
                var temp = arr[j+1];            // 保存后面小元素，
                arr[j+1] = arr[j];              // 将大元素赋值给后一个元素位置，
                arr[j] = temp;                  // 再将小元素赋值给前一个元素位置；
            }
        }
    }
    return arr;
}
const res = bubbleSort([3,2,1,4,5,6,9,7])