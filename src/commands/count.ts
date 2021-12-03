import { Argv } from "yargs";
import signale from "signale";
import { Count, getCount } from "../implementations/count";

export const command = "count [text]";
export const description = "Count the number of words or characters in text";

export const builder = (yargs: Argv) => {
  yargs
    .option("text", {
      alias: "t",
      demandOption: true,
      describe: "Text input",
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
  try {
    const count = getCount(args);
    signale.success(`${count}`);
  } catch (e) {
    signale.error(e);
  }
};
