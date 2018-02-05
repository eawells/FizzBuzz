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
});