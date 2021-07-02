

// function printPrimes(num) {
//     let allNums = [];

//     for (let i = 2; i <= num; i++) {
//         allNums.push(i);
//     }

// }

function printPrimes(num) {
    let primes = [2];

    for (let i = 3; i < num + 1; i+=2) {
        let isPrime = true;
        for(let j = 0; primes[j] <= Math.sqrt(i) && j < primes.length; j++) {
            if (i % primes[j] == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    console.log(primes);
}

printPrimes(100000000);

