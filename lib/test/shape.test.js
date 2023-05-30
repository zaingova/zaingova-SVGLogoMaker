const { Circle, Triangle, Rectangle } = require('../dev/shape')

describe('Circle', () => {
    it('should return "blue, red, SRC when the logData function is called', () => {
        let circle = new Circle("blue", "red", "SRC");
        expect(() => new Circle("blue", "red", "SRC").toBe("blue, red, SRC"))
    })
});