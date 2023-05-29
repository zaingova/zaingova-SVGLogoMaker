// circle class
class Circle {
    // takes color, textColor and text parameters. The size of the shape is pre-defined
    constructor(color, textColor, text) {
        this.radius = 80;
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    // render function - returns SVG file text using parameters defined in constructor
    render = (() => {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    });
}

// triangle class
class Triangle {
    // takes color, textColor and text parameters. The size of the shape is pre-defined
    constructor(color, textColor, text) {
        this.points = "250,60 100,400 400,400";
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    // render function - returns SVG file text using parameters defined in constructor
    render = (() => {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <polygon points=${this.points} fill="${this.color}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    })
}

// rectangle class
class Rectangle {
    // takes color, textColor and text parameters. The size of the shape is pre-defined
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    // render function - returns SVG file text using parameters defined in constructor
    render = (() => {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="0" y="0" width="300" height="200" fill="${this.color}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    })
}

// exports the Circle, Triangle and Rectangle classes
module.exports = {
    Circle,
    Triangle,
    Rectangle
};