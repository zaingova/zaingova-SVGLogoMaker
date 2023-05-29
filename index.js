// module imports and external libraries
const { Circle, Triangle, Rectangle } = require('./lib/dev/shape')
const inquirer = require('inquirer');
const fs = require('fs');

// renderShape function - based on the user-choice for the shape, creates a class-instance and calls it's unique render function
renderShape = ((data) => {
    switch (data.shapeType) {
        case "Circle":
            const circle = new Circle((data.shapeColor).toLowerCase(), (data.textColor).toLowerCase(), data.text);
            console.log(circle.render());
            break;
        case "Triangle":
            const triangle = new Triangle((data.shapeColor).toLowerCase(), (data.textColor).toLowerCase(), data.text);
            console.log(triangle.render());
            break;
        case "Rectangle":
            const rect = new Rectangle((data.shapeColor).toLowerCase(), (data.textColor.toLowerCase()), data.text);
            console.log(rect.render());
            break;
    }
})

getInput = (() => {
    inquirer.
        prompt([
            {
                type: "list",
                message: "Please enter a shape:",
                name: "shapeType",
                choices: ["Circle", "Triangle", "Rectangle"]
            },
            {
                type: "input",
                message: "Enter a logo-text (3 CHARACTERS-MAX)",
                name: "text",

                // validation to ensure the text is of valid length
                validate(text) {
                    if (text.length > 3 || text.length == 0) {
                        return "INVALID LENGTH";
                    }
                    return true;
                }
            },
            {
                type: "list",
                message: "Please enter a color for the shape:",
                name: "shapeColor",
                choices: ["Blue", "Red", "Green", "Yellow", "Orange", "White", "Purple", "Cyan"]
            },
            {
                type: "list",
                message: "Please enter a color for the text:",
                name: "textColor",
                choices: ["Blue", "Red", "Green", "Yellow", "Orange", "White", "Purple", "Cyan"]
            }
        ])

        // once data is retrieved, calls renderShape function
        .then((data) => {
            renderShape(data);
        })
})

// initializer function - starts the application with getting user-input for the logo
init = (() => {
    getInput();
})

init();