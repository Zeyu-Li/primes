let number: number = 146192364271;

// let number: any = process.openStdin();

function isPrime(number) {
    if (number <= 1) {
        return 'The number cannot be below or equal to 1';
    } else {
        if (number <= 5) {
            return 'prime';
        } else if (number % 10 % 2 === 0 ||  number % 10 === 5) {
            return 'not prime';
        } else if (number % 100 % 3 === 0) {
            return 'not prime';
        } else {
            for (let i: number = 7; i >= number ** .5; i+=2) {
                if (i % 100 % 3 === 0) {
                    continue;
                } else if (number % i === 0) {
                    return 'not prime';
                }
            }
            return 'prime';
        }
    }
}

console.log(isPrime(number));
