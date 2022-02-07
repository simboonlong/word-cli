import { Argv } from "yargs";
import signale from "signale";
import { Count, getCount } from "../implementations/count";

export const command = "count [input]";
export const description =
  "Count the number of words or characters within input text";

export const builder = (yargs: Argv) => {
  yargs
    .option("input", {
      alias: "i",
      demandOption: true,
      describe: "Input text",
      type: "string",
    })
    .option("character", {
      alias: "c",
      default: false,
      describe: "Count by character",
      type: "boolean",
    });
};

export const handler = (args: Count) => {
  try {
    const count = getCount(args);
    signale.success(`${count}`);
  } catch (e) {
    signale.error(e);
  }
};
