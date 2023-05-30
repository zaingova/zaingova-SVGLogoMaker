const SVGLogo = require('../../index');
describe('SVGLogo', () => {
    it('should throw an error if the logo text-length is either 0 or greater than 3', () => {
        let err = new Error("INVALID LENGTH");
        let text = "";
        expect(() => new SVGLogo().getInput(text).toThrow(err));
    })

    it('fff', () => {
        let data = {
            shapeType: 'Circle',
            text: 'lll',
            shapeColor: 'Blue',
            textColor: 'Blue'
        }

        expect(() => new SVGLogo.renderShape(data).toBe(
            `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
     
            <circle cx="150" cy="100" r="80" fill="blue" />
     
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ddd</text>
     
            </svg>`));
    })
})