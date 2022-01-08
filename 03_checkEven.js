function checkEven(n){
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