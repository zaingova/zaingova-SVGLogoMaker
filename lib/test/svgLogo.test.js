const SVGLogo = require('../../index');

describe('SVGLogo', () => {
    describe('validateColor', () => {
        // testing validateColor function
        it('should return true if the color value is a string-color', () => {
            let color = new SVGLogo();
            expect(color.validateColor("blue")).toEqual(true);
        });

        it('should return true if the color value is a valid hexadecimal value', () => {
            let color = new SVGLogo();
            expect(color.validateColor("#FFFFFF")).toEqual(true);
        });

        it('should return false if the color value is neither a string-color nor a hexadecimal value', () => {
            let color = new SVGLogo();
            expect(color.validateColor("INVALID_COLOR")).toEqual(false);
        });
    });
})