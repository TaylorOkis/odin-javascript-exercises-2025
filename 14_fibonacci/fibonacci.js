const fibonacci = function (num) {
    num = parseInt(num);
    if (num < 0) return "OOPS";

    let initialNumber = 1;
    let fibonacciNumber = 0;
    let tempNumber;
    for (let i = 0; i < num; i++) {
        tempNumber = fibonacciNumber;
        fibonacciNumber += initialNumber;
        initialNumber = tempNumber;
    }

    return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
