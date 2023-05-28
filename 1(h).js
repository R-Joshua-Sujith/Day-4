const arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;

const rotate = function (arr, k) {
    arr.reverse();
    let output = [];
    for (let i = 0; i < k; i++) {
        output.unshift(arr[i]);
    }
    for (let i = arr.length - 1; i >= k; i--) {
        output.push(arr[i]);
    }

    console.log(...output)
}

rotate(arr, k);
