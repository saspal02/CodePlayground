const fibonacci = function (n) {
    let a = 0;
    let b = 1;
    
    if (n < 0 || isNaN(n)) {
        return "OOPS";
    } 

    for (let i = 0; i < n; i++) {
        
        let c = a + b;
        a = b;
        b = c;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
