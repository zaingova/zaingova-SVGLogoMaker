// module imports and external libraries
const { Circle, Triangle, Rectangle } = require('./lib/dev/shape')
const inquirer = require('inquirer');
const fs = require('fs');
const { validate } = require('@babel/types');

class SVGLogo {

    // renderShape function - based on the user-choice for the shape, creates a class-instance and calls it's unique render function
    renderShape = ((data) => {
        switch (data.shapeType) {
            case "Circle":
                const circle = new Circle((data.shapeColor).toLowerCase(), (data.textColor).toLowerCase(), data.text);
                return (circle.render());
            case "Triangle":
                const triangle = new Triangle((data.shapeColor).toLowerCase(), (data.textColor).toLowerCase(), data.text);
                return (triangle.render());
            case "Square":
                const rect = new Rectangle((data.shapeColor).toLowerCase(), (data.textColor.toLowerCase()), data.text);
                return (rect.render());
        }
    })

    // creates new file called "logo.svg" and writes the data from the shape render function
    createSVG = ((data) => {
        fs.writeFile("logo.svg", data, (err) => {
            (err) ? console.log(err) : console.log("Generated logo.svg");
        })
    })

    // takes user through a set of questions which define their logo
    getInput = ((svgLogo) => {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Please enter a shape:",
                    name: "shapeType",
                    choices: ["Circle", "Triangle", "Square"]
                },
                {
                    type: "input",
                    message: "Enter a logo-text (3 CHARACTERS-MAX)",
                    name: "text",

                    // validation to ensure the text is of valid length
                    validate(text) {
                        if (text.length > 3 || text.length == 0) {
                            throw new Error("INVALID LENGTH");
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    message: "Please enter a color for the shape (color name or 6-digit HEX code [include the '#']):",
                    name: "shapeColor",

                    validate: function (shapeColor) {
                        if (svgLogo.validateColor(shapeColor)) {
                            return true;
                        } else {
                            throw new Error("INVALID COLOR");
                        }
                    }
                },
                {
                    type: "input",
                    message: "Please enter a color for the text (color name or 6-digit HEX code [include the '#']):",
                    name: "textColor",

                    validate: function (textColor) {
                        if (svgLogo.validateColor(textColor)) {
                            //console.log(svgLogo.validateColor(this.textColor))
                            return true;
                        } else {
                            throw new Error("INVALID COLOR");
                        }
                    }

                }
            ])

            // once data is retrieved, calls renderShape function
            .then((data) => {
                // pass the return value from renderShape into the createSVG function - renderShape returns SVG data
                this.createSVG(this.renderShape(data));
                return data;
            })
    })

    // initializer function - starts the application with getting user-input for the logo
    init = (() => {
        this.getInput(this);
    })

    // validate color
    validateColor = ((color) => {
        const regEx = /^#[0-9A-F]{6}$/i;
        const validColors = [
            "aqua",
            "black",
            "blue",
            "fuchsia",
            "gray",
            "green",
            "lime",
            "maroon",
            "navy",
            "olive",
            "purple",
            "red",
            "silver",
            "teal",
            "white",
            "yellow",
            "orange"
        ]

        // if color is a valid hexadecimal value
        if (regEx.test(color)) {
            // return true
            return true;
        } else {
            // otherwise iterate through all valid colors and compare given color to each value
            for (let i = 0; i < validColors.length; i++) {
                // if there is a match, return true
                if (color == validColors[i]) {
                    return true;
                }
            }
        }

        // if the function has not returned true by this point, the color cannot be valid
        return false;
    })
}

// creates class instance
const svgLogo = new SVGLogo();

// calls the init function to run the app
svgLogo.init();