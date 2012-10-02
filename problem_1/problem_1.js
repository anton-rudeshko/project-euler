function problem1 () {
    var i, sum;
    for (sum = 0, i = 0; i < 1000; ++i) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(problem1());