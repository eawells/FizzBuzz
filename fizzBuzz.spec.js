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
    it("says buzz when given 10", function () {
       var actual = fizzBuzz(10);
       expect(actual).toBe("buzz");
    });
    it("says fizzbuzz when given 30", function () {
       var actual = fizzBuzz(30);
       expect(actual).toBe("fizzbuzz");
    });
    it("says fizz when given 13", function () {
       var actual = fizzBuzz(13);
       expect(actual).toBe("fizz");
    });
    it("says fizz when given 23", function () {
        var actual = fizzBuzz(23);
        expect(actual).toBe("fizz");
    });

    it("says buzz when given 52", function () {
        var actual = fizzBuzz(52);
        expect(actual).toBe("buzz");
    });

});