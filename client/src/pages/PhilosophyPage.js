import { useState } from 'react';

import { quoteList } from './philosophy/quoteList';
import { philosophyStrings } from '../data/strings';
import { IconRepeat } from '../icon-html/IconRepeat';

export const PhilosophyPage = () => {
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
      <h1 className='display-5 fw-bold text-body-emphasis'>{philosophyStrings.h1}</h1>
      <div className='px-4 py-5 my-5 text-center'>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>{quote}</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' className='btn btn-primary btn-lg px-4 gap-3 w-50'
              onClick={() => setQuote(provideQuote(provideRandomAndRemoveFrom(availIndexes)))}>{<IconRepeat></IconRepeat>}</button>
            {/* <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Secondary</button> */}
          </div>
        </div>
      </div>
    </>
  );
};