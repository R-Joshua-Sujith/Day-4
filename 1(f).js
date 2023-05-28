const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];

const merge = function (arr1, arr2) {
    const mergeArr = [...arr1, ...arr2];
    mergeArr.sort((a, b) => a - b);
    let length = mergeArr.length
    return (mergeArr[length / 2] + mergeArr[length / 2 - 1]) / 2;
}

console.log(`Median is ${merge(arr1, arr2)}`)
