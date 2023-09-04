import { useState } from 'react';

import { philosophyStrings } from '../data/strings';
import { IconRepeat } from '../icon-html/IconRepeat';

export const PhilosophyPage = () => {
  const availIndexesList = provideAvailableIndexesOf(philosophyStrings.quoteList);
  const [availIndexes, setAvailIndexes] = useState([...availIndexesList]);
  const [quote, setQuote] = useState(() => {
    return provideQuote(provideRandomAndRemoveFrom(availIndexes));
  });
  function provideQuote(quoteListIndex) {
    console.info(`chose ${quoteListIndex}`);
    console.info(availIndexes);
    return philosophyStrings.quoteList[quoteListIndex];
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
      setAvailIndexes([...provideAvailableIndexesOf(philosophyStrings.quoteList)])
    }
    return quoteListIndex;
  }
  return (
    <>
      <h1 className='display-2 mt-5'>{philosophyStrings.h1}</h1>
      <div className='px-4 my-5 text-center'>
        <div className='col-sm-6 mx-auto'>

          <figure>
            <blockquote className='blockquote'>
              <p>{quote.text}</p>
            </blockquote>
            <figcaption className='blockquote-footer'>
              {quote.author}
            </figcaption>
          </figure>

          <div className='row'>
            <div className='d-grid gap-2 d-flex justify-content-center'>
              <div className='col-4'>
                <button type='button' className='btn btn-primary btn-lg px-4 gap-3'
                  onClick={() => setQuote(provideQuote(provideRandomAndRemoveFrom(availIndexes)))}>{<IconRepeat></IconRepeat>}</button>
                {/* <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Secondary</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};