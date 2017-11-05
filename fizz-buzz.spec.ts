var fizzBuzz = require("./fizz-buzz");

describe('Fizz Buzz', () => {
    it('should be OK', () => {
        expect(true).toBe(true);
    });

    describe('when say', () => {
        it('should be 1 when 1', () => {
            expect(fizzBuzz.say(1)).toBe(1);
        });
    });

});
