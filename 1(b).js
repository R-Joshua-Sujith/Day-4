const input = ['joshua', 'sujith', 'kumar'];

const capital = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const string = arr[i].split("");
        let result = [];
        for (let i = 0; i < string.length; i++) {
            result.push(string[i].toUpperCase());
        }
        console.log(result.join(""))
    }
}

capital(input);