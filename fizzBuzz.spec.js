var fizzBuzz = require("./fizzBuzz").fizzBuzzFunction

describe("fizzBuzz", function() {
    it("says 1 when given 1", function() {
        var actual = fizzBuzz(1);
        expect(actual).toBe(1);
    });
    it("says fizz when given 3", function () {
       var actual = fizzBuzz(3);
       expect(actual).toBe("fizz");
    });
    it("says buzz when given 5", function () {
       var actual = fizzBuzz(5);
       expect(actual).toBe("buzz");
    });
    it("says 2 when given 2", function () {
       var actual = fizzBuzz(2);
       expect(actual).toBe(2);
    });
    it("says fizzbuzz when given 15", function () {
       var actual = fizzBuzz(15);
       expect(actual).toBe("fizzbuzz");
    });
    it("says fizz when given 6", function () {
       var actual = fizzBuzz(6);
       expect(actual).toBe("fizz");
    });

});