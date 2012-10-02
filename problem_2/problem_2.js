var fib = (function () {
    var cache = [0, 1];
    return function fibonacci(n) {
        (cache[n] === undefined) && (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
        return cache[n];
    };
})();

function problem2 () {
    var i, n, sum;
    for (sum = 0, i = 0, n = 0; n <= 4000000; ++i, n = fib(i)) {
        if (n % 2 === 0) {
            sum += n;
        }
    }
    return sum;
}

console.log(problem2());
