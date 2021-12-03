export interface Count {
  text: string;
  char?: boolean;
}

export const getCount = (args: Count) => {
  const { text, char } = args;
  let count;

  if (char) {
    const textWithoutSpace = text.replace(/ /g, "");
    count = textWithoutSpace.length;
  } else {
    const arrayWords = text.split(" ").filter((item) => {
      return item !== "";
    });
    count = arrayWords.length;
  }

  return count;
};
