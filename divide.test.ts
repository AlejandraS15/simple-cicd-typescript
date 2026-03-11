/**
* Unit tests for divide()
* Loads the compiled divide.js so window.divide is available (same as in the browser).
*/
declare global {
  interface Window {
  divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
// Load the built script that attaches divide to window
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("./divide.js");
});

describe("divide", () => {

// Casos básicos con enteros positivos
it("divides two positive numbers", () => {
expect(window.divide(10, 2)).toBe(5);
});

it("divides numbers with decimal result", () => {
expect(window.divide(7, 2)).toBe(3.5);
});

// Casos con cero
it("returns 0 when numerator is zero", () => {
expect(window.divide(0, 5)).toBe(0);
});

// Casos con números negativos
it("divides positive by negative number", () => {
expect(window.divide(10, -2)).toBe(-5);
});

it("divides negative by positive number", () => {
expect(window.divide(-10, 2)).toBe(-5);
});

it("divides two negative numbers", () => {
expect(window.divide(-10, -2)).toBe(5);
});

// Caso límite: división por cero
it("throws error when dividing by zero", () => {
expect(() => window.divide(10, 0)).toThrow("Division by zero is not allowed");
});

});

export {};
