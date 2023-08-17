import { useState } from 'react';

import { PortfolioItemTile } from './portfolio-section/PortfolioItemTile';
import { notesTileData, puzzleSolverTileData } from './portfolio-section/tileData';
import { tags } from './portfolio-section/tags';
import { TagButton } from './portfolio-section/TagButton';

export const HomePage = () => {
    const [tagStateMachine, setTagStateMachine] = useState(tags);
    const [firstClickHasOccurred, setFirstClickHasOccurred] = useState(false);
    return (
        <>
            <h1>Brandon Foster</h1>
            <p className="lead">software developer 5+ years</p>
            <p className="lead">
              {Object.keys(tagStateMachine).map((t, i) => 
                <TagButton key={`tag${i}`} tagName={t} tagStateMachine={tagStateMachine} setTagStateMachine={setTagStateMachine} />
              )}
            </p>
          <section className="mt-5 text-center container" id="portfolio-destination">
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
              <PortfolioItemTile tileProps={notesTileData} tagStateMachine={tagStateMachine}  />
              <PortfolioItemTile tileProps={puzzleSolverTileData} tagStateMachine={tagStateMachine}  />
            </div>
          </div>
        </>
    );
};