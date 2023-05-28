const input = ['john', 'malayalam', 'joke', 'wow', 'madam', 'joshua'];

const palindrome = function (arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let string = arr[i];

        for (let i = 0; i < string.length / 2; i++) {

            if (string[i] !== string[string.length - 1 - i]) {
                count++;
            }

        }
        if (count == 0) {
            output.push(string);
        }
    }
    return output;

}

console.log(palindrome(input));
