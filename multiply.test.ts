/**
* Unit tests for multiply()
* Loads the compiled multiply.js so window.multiply is available (same as in the browser).
*/
declare global {
  interface Window {
  multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
// Load the built script that attaches multiply to window
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("./multiply.js");
});

describe("multiply", () => {

// Casos básicos con enteros positivos
it("multiplies two positive numbers", () => {
expect(window.multiply(3, 4)).toBe(12);
});

it("multiplies larger positive numbers", () => {
expect(window.multiply(10, 5)).toBe(50);
});

// Casos con cero
it("returns 0 when multiplying by zero", () => {
expect(window.multiply(5, 0)).toBe(0);
});

it("returns 0 when both numbers are zero", () => {
expect(window.multiply(0, 0)).toBe(0);
});

// Casos con números negativos
it("multiplies a negative and positive number", () => {
expect(window.multiply(-3, 4)).toBe(-12);
});

it("multiplies two negative numbers", () => {
expect(window.multiply(-3, -4)).toBe(12);
});

});

export {};
