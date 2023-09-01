import { useState } from 'react';

export const PhilosophyPage = () => {
  const quoteList = [
    `Hope is not an engineering best practice. - Team Lead, circa 2017, paraphrased`,
    `You only need to test the boundary. Then you can refactor the lower layers. - L.H., circa 2022, paraphrased`,
    `Before your fingers touch the keyboard, know what you want to do. - C.S. professor during a college visit, circa 2011, paraphrased`,
    `Nothing is difficult. It depends on how much time you have. - F.L., circa 2011, paraphrased`,
    `I see what's going on. They did entirely too much pre-factoring. - P.G., circa 2021, paraphrased`,
    `I know I did a good job refactoring when I end up fewer lines than I did before. - R.G., circa 2022, paraphrased`,
    `Nobody has yet to answer me. Why are we adding jars to git? - K.K., circa 2023, paraphrased`,
  ];
  const availIndexesList = provideAvailableIndexesOf(quoteList);
  const [availIndexes, setAvailIndexes] = useState([...availIndexesList]);
  const [quote, setQuote] = useState(() => {
    return provideQuote(provideRandomAndRemoveFrom(availIndexes));
  });
  function provideQuote(quoteListIndex) {
    console.info(`chose ${quoteListIndex}`);
    console.info(availIndexes);
    return quoteList[quoteListIndex];
  }
  function provideAvailableIndexesOf(sourceArr) {
    let arr = [];
    for (let i = 0; i < sourceArr.length; i++) {
      arr.push(i);
    }
    return arr;
  }
  function provideRandomAndRemoveFrom(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    const quoteListIndex = arr.splice(rand, 1);
    if (availIndexes.length === 0) {
      setAvailIndexes([...provideAvailableIndexesOf(quoteList)])
    }
    return quoteListIndex;
  }
  return (
    <>
      <h1 className='display-5 fw-bold text-body-emphasis'>Philosphy</h1>
      <div className='px-4 py-5 my-5 text-center'>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>{quote}</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' className='btn btn-primary btn-lg px-4 gap-3'
              onClick={() => setQuote(provideQuote(provideRandomAndRemoveFrom(availIndexes)))}>New Quotation</button>
            {/* <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Secondary</button> */}
          </div>
        </div>
      </div>
    </>
  );
};