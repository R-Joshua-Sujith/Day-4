const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

const duplicates = function (numbers) {
    const obj = {};
    for (let i = 0; i < numbers.length; i++) {
        if (obj[numbers[i]]) {
            obj[numbers[i]]++;
        } else {
            obj[numbers[i]] = 1;
        }
    }
    console.log(Object.keys(obj).join(" "));
}

duplicates(numbers);

