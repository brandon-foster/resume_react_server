export const homeStrings = {
  reposButton: 'Repos',
};

function createQuotation(text, author) {
  const quotation = Object.create(null);
  quotation.text = text;
  quotation.author = author;
  return quotation;
}
export const philosophyStrings = {
  h1: 'Philosophy',
  quoteList: [
    createQuotation(`You only need to test the boundary. Then you can refactor.`, `L.H., paraphrased, circa 2022`),
    createQuotation(`Before your fingers touch the keyboard, know what you want to do.`, `C.S. professor during a college visit, paraphrased, circa 2011`),
    createQuotation(`Nothing is difficult. It just depends on how much time you have.`, `F.L., paraphrased, circa 2011`),
    createQuotation(`I see what's going on. They did entirely way too much pre-factoring.`, `P.G., paraphrased, circa 2021`),
    createQuotation(`I know I did a good job refactoring when I end up fewer lines than I did before.`, `R.G., paraphrased, circa 2022`),
  ],
};

export const layoutStrings = {
  footer: `
    &copy; ${new Date().getFullYear()}
    Made with &#10024;
    `.trim(),
};