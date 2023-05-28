let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const prime = function (arr) {
    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        let no = arr[i];

        let count = 0;
        for (let j = 1; j <= no; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            primeArray.push(arr[i]);
        }
    }
    return primeArray;
}

console.log(prime(numbers));

