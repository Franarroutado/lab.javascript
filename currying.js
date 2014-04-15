// This is Currying in javascript

var babyAnimals = function(a) {
    return function(b) {
        var result = 'i love '.concat(a).concat(' and ').concat(b);
        return result;
    };
};

var sum = function(otherFunc) {

    return function(a, b) {
        var sumRec = function(a, b) {
            if ( a > b ) 
                return 0; 
            else 
                return otherFunc(a) + sumRec( a + 1, b);
        };
        return sumRec(a,b);
    };
    
};