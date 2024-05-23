import { sum, mult } from "../src/utils";

describe("Testing all utils.js functions", () => {
  describe("Testing the sum function", () => {
    test("Provides two numbers and expects their sum", () => {
      const result = sum(1, 20);
      expect(result).toEqual(21);
    });

    test("Gives a letter and a number and expects an error", () => {
      let result;

      try {
        sum("1a", 20);
      } catch (error) {
        result = error.message;
      }

      expect(result).toEqual("Parameters must be a number");
    });
  });

  describe("Testing the multiplication function", () => {
    test("Provides two numbers and expects their multiplication", () => {
      const result = mult(2, 20);
      expect(result).toEqual(40);
    });

    test("Gives a letter and a number and expects an error", () => {
      let result;

      try {
        mult(2, "20aawdadaw");
      } catch (error) {
        result = error.message;
      }

      expect(result).toEqual("Parameters must be a number");
    });
  });
});
