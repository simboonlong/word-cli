export const getWords = (text: string) => {
  return text.split(" ").filter((item) => {
    return item !== "";
  });
};
