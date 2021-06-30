let arr = [1, 2, 1, 1, 2, 3, 6, 7, 8, 8, 1, 6, 7];

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

//another solution

function unicCount_2(arr) {
    let map = {}
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = 0;
    }
    for(i = 0; i < arr.length; i++) {
        map[arr[i]]++;
    }
    for (num in map) {
        count += (map[num] * (map[num] - 1)) / 2;
    }
    return(count);
}

console.log(unicCount_2(arr));
