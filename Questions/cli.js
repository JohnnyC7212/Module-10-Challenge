const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    async run() {
        try{
            const userInput = await this.getUserInput();
            const shape = this.createShape(userInput.shapeType, userInput.shapeColor);
            const svg = this.createSVG(userInput.text, userInput.textColor, shape);
            await this.saveSVGToFile(svg);
            this.displaySuccessMessage();
        } catch(error) {
            this.handleErrorMessage(error);
        }
    }

    async getUserInput() {
        return inquirer.prompt([
            {
                name:"text",
                type: "input",
                message: "Enter text for the logo. (NO MORE THAN THREE CHARACTERS!",
                validate: (text) => text.length <= 3 || "Does not contain more than three characters",

            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a text color",

            },
            {
                name: "shapeType",
                type: "list",
                message: "Shape Selector",
                choices: ["square", "circle", "triangle"],

            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color",
            },
        ]);
    }

    createShape(shapeType, shapeColor) {
        switch (shapeType) {
            case "circle":
                return new Circle(shapeColor);
            case "square":
                return new Square(shapeColor);
            default:
                return new Triangle(shapeColor);
        }
    }

    createSVG(text, textColor, shape ) {
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return svg;
    }

    async saveSVGToFile(svg) {
        await writeFile("logo.svg", svg.render());
    }

    displaySuccessMessage() {
        console.log("Generated logo.svg");
    }

    handleErrorMessage() {
        console.error(error);
        console.error("Something has gone awry.");
        
    }
}

module.exports = CLI;