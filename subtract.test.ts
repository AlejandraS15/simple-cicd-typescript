/**
 * Unit tests for subtraction()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {

  // Casos básicos con enteros positivos
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts when result is negative", () => {
    expect(window.subtract(3, 5)).toBe(-2);
  });

  // Casos con cero
  it("subtracts with zero", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("subtracts zero minus a number", () => {
    expect(window.subtract(0, 5)).toBe(-5);
  });

  // Casos con números negativos
  it("subtracts negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });

  it("subtracts positive and negative numbers", () => {
    expect(window.subtract(5, -3)).toBe(8);
  });

});

export {};