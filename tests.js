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

test("Currying function", function() {
    var sumInts = sum(function(x) {
        return x;
    });
    
    var sumCubes = sum(function(x) {
        return x * x * x;
    });
    console.log(sumInts);
    ok(sumInts(1, 30) == 465, "Ha fallado la suma de Integers: " + sumInts(1, 30))
    ok(sumCubes(1,3) == 36, "Ha fallado la suba de cubos usando currying: sumCubes(1,3): " + sumCubes(1,3) + " != " + 36)
});