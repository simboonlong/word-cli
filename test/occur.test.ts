import { occur } from "../src/implementations/occur";

describe("occur", () => {
  test("should get 0 occurence by word", () => {
    const count = occur({ input: "foobar in hello world!", string: "" });
    expect(count).toBe(0);
  });

  test("should get 1 occurence by word", () => {
    const count = occur({ input: "foobar in hello world!", string: "foobar" });
    expect(count).toBe(1);
  });

  test("should get 2 occurences by word", () => {
    const count = occur({
      input: "foobar in hello world! foobar",
      string: "foobar",
    });
    expect(count).toBe(2);
  });

  test("should get 0 occurence by character", () => {
    const count = occur({
      input: "foobar in hello world!",
      string: "z",
      character: true,
    });
    expect(count).toBe(0);
  });

  test("should get 4 occurences by character", () => {
    const count = occur({
      input: "foobar in hello world!",
      string: "o",
      character: true,
    });
    expect(count).toBe(4);
  });
});
