import { getWords } from "../utils";

export interface Count {
  input: string;
  character?: boolean;
}

export const getCount = (args: Count) => {
  const { input, character } = args;
  let count;

  if (character) {
    const textWithoutSpace = input.replace(/ /g, "");
    count = textWithoutSpace.length;
  } else {
    count = getWords(input).length;
  }

  return count;
};
