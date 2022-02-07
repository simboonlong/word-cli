import { getCount } from "../src/implementations/count";

describe("getCount", () => {
  test("should get 0 word", () => {
    const count = getCount({ input: "" });
    expect(count).toBe(0);
  });

  test("should get 0 character", () => {
    const count = getCount({ input: "", character: true });
    expect(count).toBe(0);
  });

  test("should get 2 words", () => {
    const count = getCount({ input: "foo bar" });
    expect(count).toBe(2);
  });

  test("should get 6 characters", () => {
    const count = getCount({ input: "foo bar", character: true });
    expect(count).toBe(6);
  });
});
