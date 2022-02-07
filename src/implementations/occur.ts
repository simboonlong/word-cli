import { getWords } from "../utils";

export interface Occur {
  input: string;
  string: string;
  character?: boolean;
}

export const occur = (args: Occur) => {
  const { input, string, character } = args;
  const regex = new RegExp(string, "g");
  let count = 0;

  if (character) {
    count = (input.match(regex) || []).length;
  } else {
    count = getWords(input).filter((word) => word === string).length;
  }

  return count;
};
