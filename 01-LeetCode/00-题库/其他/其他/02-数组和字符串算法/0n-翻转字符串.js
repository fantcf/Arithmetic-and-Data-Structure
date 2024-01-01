// 不新建数组，将数组进行翻转；


const reverseString = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        // const temp = arr[right];
        // arr[right--] = arr[left];
        // arr[left++] = temp;
        [arr[right--], arr[left++]] = [arr[left], arr[right]]
    }
    return arr;
}

const result = reverseString(["h","e","l","l","o"]);
console.log(result);