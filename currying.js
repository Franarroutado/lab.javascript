// This is Currying in javascript

var babyAnimals = function(a) {
    return function(b) {
        var result = 'i love '.concat(a).concat(' and ').concat(b);
        return result;
    };
};