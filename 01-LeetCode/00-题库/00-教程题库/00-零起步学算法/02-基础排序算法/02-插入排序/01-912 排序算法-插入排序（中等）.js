// 插入排序
// 循环不变量：arr[pre]始终是大于cur的时候，才会进入循环中，进行两两交换，目的是为了找pre；

function insertionSort(arr) {
    var len = arr.length;
    var pre, cur;
    for (var i = 1; i < len; i++) {             // 为什么从1开始？因为如果从0开始，-1就没有意义了；
        pre = i - 1;
        cur = arr[i];                           // 提前保存cur，因为在小循环里，cur是不会变的
        while(pre >= 0 && arr[pre] > cur) {     // 两两比较，判断依次减少的pre是否比cur大，
            arr[pre+1] = arr[pre];              // 如果pre比现在的大，pre就可以向右移一格，放到pre+1的位置；
            pre--;                              // 比完之后，pre-1，再进行比较；
        }
        arr[pre+1] = cur;                       // 全都比较完成，
    }
    return arr;
}

const res = insertionSort([3,2,1,4,5,6,9,7])
