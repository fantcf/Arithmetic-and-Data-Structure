const arr = [1,2];
const arr2 = [3,4];
const arrays = [arr, arr2]

// 合并两个数据-原始方法：
function primitiveFn(arrays) {
    const result = []
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result.push(arrays[i][j])
        }
    }
    return result;
}
const result1 = primitiveFn(arrays);

// 合并两个数组-函数式编程：
function FPFn(arrays) {
    return arrays.reduce((p, n) => p.concat(n));
}
const result2 = FPFn(arrays);

// 合并两个数组-更简单的方法：
function piontFn(...arrays) {
    console.log(arrays);
    console.log(...arrays);
    return [].concat(...arrays)
}
const result3 = piontFn(arr, arr2)
console.log(result3);