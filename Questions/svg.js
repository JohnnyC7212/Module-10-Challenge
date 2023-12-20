class CustomSVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    generateSVG () {
        return `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;

    }

    addText(message, color) {
        if (message, color) {
            throw new Error("Text must not exceed 3 characters. ");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setCustomShape(customShape) {
        this.shapeElement = customShape.generate();
    }
}

module.exports = CustomSVG;