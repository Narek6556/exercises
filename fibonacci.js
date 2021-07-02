let obj = {
    1: 1,
    2: 1
};

function fibonacci(num, memObj) {

    // let i = 1;
    // let arr = [];
    // arr[0] = 1;
    // arr[1] = 1;
    // while (i <= num && ) {

    //     i++;
    // }

    if (memObj.hasOwnProperty(num)) {
        return memObj[num];
    } 
    memObj[num] = fibonacci(num - 1, memObj) + fibonacci(num - 2, memObj);
    return memObj[num];
}

console.log(fibonacci(100, obj));

console.log(obj[100])