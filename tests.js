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