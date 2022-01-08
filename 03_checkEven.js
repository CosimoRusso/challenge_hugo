function checkEven(n){
    // if the last bit is 1, for sure the number is odd
    return !(n & 1);

}

function test(){
    let even;
    for (let i=0; i<1000; i++){
        even = i % 2 === 0;
        console.assert(even === checkEven(i))
    }
}

test()