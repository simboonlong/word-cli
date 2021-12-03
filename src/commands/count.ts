import { Argv } from "yargs";
import signale from "signale";

interface Count {
  text: string;
  char?: boolean;
}

export const command = "count [text]";
export const description = "Count the number of words or characters in text";

export const builder = (yargs: Argv) => {
  yargs
    .option("text", {
      alias: "t",
      demandOption: true,
      describe: "Input for text",
      type: "string",
    })
    .option("char", {
      alias: "c",
      default: false,
      describe: "Count characters",
      type: "boolean",
    });
};

export const handler = (args: Count) => {
  const { text, char } = args;
  let count;

  if (char) {
    const textWithoutSpace = text.replace(/ /g, "");
    count = textWithoutSpace.length;
  } else {
    count = text.split(" ").filter((item) => {
      return item !== "";
    }).length;
  }

  signale.success(`${count}`);
  return count;
};
