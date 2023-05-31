const { Circle, Triangle, Rectangle } = require('../dev/shape')

describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a properly rendered SVG string', () => {
            let circle = new Circle("blue", "red", "SRC");
            let result = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <circle cx="150" cy="100" r="80" fill="blue" />
     
     <text x="150" y="117" font-size="60" text-anchor="middle" fill="red">SRC</text>
     
     </svg>`;
            expect(circle.render()).toBe(result)
        })
    });

    describe('Triangle', () => {
        it('should return a properly rendered Triangle SVG string', () => {
            let triangle = new Triangle("blue", "red", "SRC");
            let result = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <polygon points="0, 200 150, 0 300, 200" fill="blue"/>
     
     <text x="150" y="145" font-size="60" text-anchor="middle" fill="red">SRC</text>
     
     </svg>`
            expect(triangle.render()).toBe(result);
        })
    });

    describe('Rectangle', () => {
        it('should return a properly rendered Rectangle SVG string', () => {
            let rect = new Rectangle("blue", "red", "SRC");
            let result = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect x="50" y="0" width="200" height="200" fill="blue"/>
        
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="red">SRC</text>
        
        </svg>`
            expect(rect.render()).toBe(result);
        })
    });
})
