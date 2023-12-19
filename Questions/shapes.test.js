const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
    test("should", () => {
        const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
        const square = new Square ();
        square.setColor("dodgerblue");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });

    test("should accept a fillColor parameter", () => {
    const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSVG = square.render();
    expect(actualSVG).toEqual(expectedSVG);
    });
});

describe("Triangle", () => {
    test("should render an SVG for a green polygon element ", () =>{
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
        const triangle = new Triangle();
        triangle.setColor("bisque");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });

    test("should accept a fillColor parameter", () => {
        const expectedSVG = '<polygon points ="150, 18 244, 182 56, 182" fill="purple" />';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });

describe("Circle", () => {
    test("should render an SVG for a green circle element", () => {
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle ();
        circle.setColor("green");
        const actualSVG = circle.render();
        expect(acutalSVG).toEqual(expectedSVG);
    });

    test("should accept a fillColor parameter", () => {
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
})
});

