import { useState } from 'react';

export const PhilosophyPage = () => {
  const quoteList = [
    `Hope is not an engineering best practice. - Team Lead, circa 2017`,
    `You just need to test the boundary of the existing application. Then you can refactor. - L.H., circa 2022`,
    `Before your fingers touch the keyboard, know what you want to do. - CS professor during a college visit, 2011`,
    `Nothing is difficult. It depends on how much time you have. - F.L., 2011`,
    `I see what's going on. They did entirely too much pre-factoring. - P.G., 2021`,
    `I know I successfuly refactored code when it has fewer lines than before. - R.G., 2022`,
    `Why are we adding jars files to version control? - K.K., 2023`,
  ];
  const availableIndexesList = provideAvailableIndexesOf(quoteList);
  function provideQuote(quoteListIndex) {
    const q = quoteList[quoteListIndex];
    return q;
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
    if (availableIndexesList.length === 0) {
      availableIndexesList = provideAvailableIndexesOf(quoteList);
    }
    return quoteListIndex;
  }
  const [quote, setQuote] = useState(() => {
    return provideQuote(provideRandomAndRemoveFrom(availableIndexesList));
  });
  return (
    <>
      <h1 className='display-5 fw-bold text-body-emphasis'>Philosphy</h1>
      <div className='px-4 py-5 my-5 text-center'>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>{quote}</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' className='btn btn-primary btn-lg px-4 gap-3'
              onClick={() => setQuote(provideQuote(provideRandomAndRemoveFrom(availableIndexesList)))}>New Quotation</button>
            {/* <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Secondary</button> */}
          </div>
        </div>
      </div>
    </>
  );
};