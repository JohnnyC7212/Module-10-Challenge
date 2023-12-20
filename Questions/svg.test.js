const CustomSVG = require("./svg");
const { Square } = require("./shapes");

describe("CustomSVG", () => {
    test("renders a 300 x 200 svg element", () => {
        const expectedSVG = '<svg width="300" height="200" xmlns="https://www.w3.org/2000/svg"></svg>';
        const svg = new CustomSVG();
        expect(svg.generateSVG()).toEqual(expectedSvg);
    });

    test("appends text element", () => {
        const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
        const svg = new CustomSVG();
        svg.setText("A", "white");
        expect(svg.generateSVG()).toEqual(expectedSVG);
    });

    test("sets text message and color", () => {
        const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
        const svg = new CustomSVG();
        svg.setText("SVG", "#333");
        expect(svg.generateSVG()).toEqual(expectedSvg);
    });

    test("throws if text exceeds 3 characters", () => {
        const svg = new CustomSVG();
        const expectedError = new Error("Text must not exceed 3 characters.");
        expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
    });

    test("includes a shape", () => {
        const expectedSvg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
        const svg = new CustomSVG();
        svg.setText("SVG", "#333");
        const square = new Square();
        square.setColor("dodgerblue");
        svg.setCustomShape(square);
        expect(svg.generateSVG()).toEqual(expectedSVG);
    });

});