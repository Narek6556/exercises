let obj = {
}

function howManySteps(n, m, memObj) {
    if (m == 0 || n == 0) {
        memObj[`m_${m} n_${n}`] = 0;
        return 0;
    }
    if (m == 1 && n == 1) {
        memObj[`m_${m} n_${n}`] = 1;
        return 1;
    }
    if (memObj.hasOwnProperty(`m_${m} n_${n}`)) {
        return memObj[`m_${m} n_${n}`];
    }
    memObj[`m_${m} n_${n}`] = howManySteps(n - 1, m, memObj) + howManySteps(n, m - 1, memObj);
    return memObj[`m_${m} n_${n}`]
}

console.log(howManySteps(5,5, obj));

// console.log(obj);