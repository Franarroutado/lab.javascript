// Test for testing array "recursive"
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

test("hello test", function() {
    ok(1 == "1", "Passed!");
});

test("Factorial function", function() {
    ok(factorial(5) == 120, "120 is not equal to " + factorial(5));
});

test("Currying function", function() {
    var babyKoala = babyAnimals('koalas');
    ok(babyKoala('elephants') == 'i love koalas and elephants', 'It went wrong')
});

// Splice vs Slice
test("Slice test", function() {
    ok('abc'.slice(1, 2) === 'b');
    ok(arraysEqual([14, 3, 77].slice(1, 2), [3]));
});

// Splices mutates the arrays
test("Splice test", function() {
    ok(arraysEqual([14, 3, 77].splice(1, 2), [3, 77]));
    
    var originalArray = [14, 3, 77];
    var newArray = originalArray.splice(1, 2);
    
    ok(arraysEqual(originalArray, [3, 77]), originalArray);
});