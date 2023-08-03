import { useState } from 'react';

import notesSquare from '../img/notes-square.png';
import puzzlesolverSquare from '../img/puzzle-solver-square.png';

export const HomePage = () => {
    const tag = {
        FRUIT: 'FRUIT',
        EXPENSIVE: 'EXPENSIVE',
        FAVORITE: 'FAVORITE',
    };
    const tags = [
        tag.FRUIT, tag.EXPENSIVE, tag.FAVORITE,
    ];
    const books = [
        {
            title: 'Apple Book',
            tagList: [
                tag.FRUIT,
            ],
        },
        {
            title: 'Banana Book',
            tagList: [
                tag.FRUIT,
                tag.EXPENSIVE,
                tag.FAVORITE,
            ],
        },
        {
            title: 'Cherry Book',
            tagList: [
                tag.FRUIT,
                tag.EXPENSIVE,
            ],
        },
    ];
    const [bookListState, setBookListState] = useState([]);
    function handleTagButtonClick(e, tag) {
        const newList = books.filter(b => b.tagList.includes(tag));
        setBookListState([...newList]);
    }
    return (
        <>
            <h1>Brandon Foster</h1>
            <p className="lead">software developer 5+ years</p>
            <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">personal</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">java</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">javascript</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">python</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">utilities</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">resume</a>
            </p>
            {tags.map((t, i) => {
                return (
                    <button key={`tagButton${i}`} type='button' className='btn btn-secondary' onClick={e => handleTagButtonClick(e, t)}>{t}</button>
                );
            })}
            {bookListState.map((b, i) => {
                return (
                    <p key={`book${i}`}>{ b.title }</p>
                );
            })}
          <section className="mt-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Personal Tinkering</h1>
                <p>
                  <a href="#" className="btn btn-primary my-2">All Repos&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="container-fluid mb-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div className="col">
                <div className="card shadow-sm bg-secondary text-white">
                  <a href="http://notes.localhost:4480/notes" target="_blank">
                    <img src={notesSquare} className="bd-placeholder-img card-img-top" width="225" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-text">Notes</h4>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <small className="text-light">A place for notes.</small>
                      <small className="text-light">Pure PHP, plus a Markdown library. MySQL. Dockerized.</small>
                    </div>
                    <a href="https://joyldp.com/gogs/brandon/notes" target="_blank" className="btn btn-sm btn-outline-light mt-3">repo&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-secondary text-white">
                  <a href="/puzzlesolver-frontend/" target="_blank">
                    <img src={puzzlesolverSquare} className="bd-placeholder-img card-img-top" width="225" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-text">Puzzle Solver</h4>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <small className="text-light">Java 15-puzzle solver.</small>
                      <small className="text-light">Pure JavaScript ES6, HTML, and CSS front end.</small>
                    </div>
                    <a href="https://joyldp.com/gogs/brandon/puzzlesolver-frontend" target="_blank" className="btn btn-sm btn-outline-light mt-3">ui&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                    <a href="https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot" target="_blank" className="btn btn-sm btn-outline-light mt-3">service&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                    <a href="https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md" target="_blank" className="btn btn-sm btn-outline-light mt-3">core&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-secondary text-white">
                  <a href="#">
                    <img src={notesSquare} className="bd-placeholder-img card-img-top" width="225" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                  </a>
                  <div className="card-body">
                    <h4 className="card-text">Hangman</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-light">Pure PHP, plus a Markdown library. MySQL. Dockerized.</small>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-light mt-3">repo&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};