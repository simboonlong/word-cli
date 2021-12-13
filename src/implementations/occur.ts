import { getWords } from "../utils";

export interface Occur {
  text: string;
  string: string;
  char?: boolean;
}

export const occur = (args: Occur) => {
  const { text, string, char } = args;
  const regex = new RegExp(string, "g");
  let count = 0;

  if (char) {
    count = (text.match(regex) || []).length;
  } else {
    count = getWords(text).filter((word) => word === string).length;
  }

  return count;
};
