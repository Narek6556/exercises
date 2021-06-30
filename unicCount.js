let arr = [1, 2, 1, 1, 2, 3];

function unicCount(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
    }
    return count;
}

console.log(unicCount(arr));

