import { Argv } from "yargs";
import signale from "signale";
import { Occur, occur } from "../implementations/occur";

export const command = "occur [input]";
export const description =
  "Count the number of occurrences of word or character within input text";

export const builder = (yargs: Argv) => {
  yargs
    .option("input", {
      alias: "i",
      demandOption: true,
      describe: "Input text",
      type: "string",
    })
    .option("string", {
      alias: "s",
      demandOption: true,
      describe: "String to find within input text",
      type: "string",
    })
    .option("character", {
      alias: "c",
      default: false,
      describe: "Count by character",
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
