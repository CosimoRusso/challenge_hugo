function fibonacci_recursive(n){
    if (n === 1 || n === 0){
        return n;
    }else {
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2);
    }
}

function fibonacci_dynamic(n){
    const memoization = {0: 0, 1: 1}
    const sub_fib = (k) => {
        if (k in Object.keys(memoization)) {
            return memoization[k]
        }
        const result = sub_fib(k-1) + sub_fib(k-2);
        memoization[k] = result
        return result;
    }
    return sub_fib(n);
}

function test_fib(){
    results = [0, 1, 1, 2, 3, 5, 8, 13, 21]
    for (let i=0; i<9; i++){
        rec = fibonacci_recursive(i)
        dyn = fibonacci_dynamic(i)
        if (rec !== results[i]){
            throw `ERROR for recursive input ${i}: expected ${results[i]} but got ${rec}`;
        }
        if (dyn !== results[i]){
            throw `ERROR for dynamic input ${i}: expected ${results[i]} but got ${dyn}`;
        }
    }
    console.log("Done, no errors")
}

test_fib();