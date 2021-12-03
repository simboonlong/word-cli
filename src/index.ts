import yargs from "yargs";

yargs
  .scriptName("word")
  .commandDir("commands", { extensions: ["ts", "js"] })
  .demandCommand()
  .strict()
  .help().argv;
