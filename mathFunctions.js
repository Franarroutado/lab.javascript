// Most optimiced version
function factorial(number) {
    if (number == 0) return 1;
    else return number * factorial(number - 1); 
}

// less optimiced version
function factorialV2(number) {
    var product = 1;
    while(number > 1) {
        product *= number;
        number--;
    }
    return product;
}

// less optmiced version #2
function factorialV3(number) {
    var product = 1;
    for (i=2; i<=number; i++) {
        product *= i;
    }
    return product;
}