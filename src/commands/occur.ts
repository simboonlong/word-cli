import { Argv } from "yargs";
import signale from "signale";
import { Occur, occur } from "../implementations/occur";

export const command = "occur [text]";
export const description =
  "Count the number of occurrences of word or character in text";

export const builder = (yargs: Argv) => {
  yargs
    .option("text", {
      alias: "t",
      demandOption: true,
      describe: "Text input",
      type: "string",
    })
    .option("string", {
      alias: "str",
      demandOption: true,
      describe: "String to match occurrence",
      type: "string",
    })
    .option("char", {
      alias: "c",
      default: false,
      describe: "Count by character occurrence",
      type: "boolean",
    });
};

export const handler = (args: Occur) => {
  try {
    const count = occur(args);
    signale.success(`${count}`);
  } catch (e) {
    signale.error(e);
  }
};
