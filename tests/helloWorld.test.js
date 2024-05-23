import { helloWorld } from "../src/helloWorld";

test("My first test using Node.js", () => {
  const result = helloWorld();
  expect(result).toEqual("Hello World!");
});
