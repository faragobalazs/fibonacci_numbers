// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

var output = [];

function fibonacciGenerator(n) {   
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            output.push(i)
        }

        else {
            output.push(output[i-2] + output[i-1])
        }

    console.log(output)
    }
} 


fibonacciGenerator(13);