function fibonacci_recursive(n){
    if (n === 1 || n === 0){
        return n;
    }else {
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
    }
}

function test_fib(){
    results = [0, 1, 1, 2, 3, 5, 8, 13, 21]
    for (let i=0; i<9; i++){
        f = fibonacci_recursive(i)
        if (f !== results[i]){
            throw `ERROR for input ${i}: expected ${results[i]} but got ${f}`;
        }
    }
    console.log("Done, no errors")
}

test_fib();