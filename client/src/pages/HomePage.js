import { useState } from 'react';

import { tags } from './portfolio-section/tags';

import { ProjectTagList } from '../comp/ProjectTagList';
import { AllReposButton } from '../comp/AllReposButton';
import { PortfolioItems } from '../comp/PortfolioItems';

export const HomePage = () => {
  const [tagStateMachine, setTagStateMachine] = useState(tags);
  return (
    <>
      <section className='mt-5 mb-4'>
        <h1>Brandon Foster</h1>
      </section>
      <section>
        <p className="lead">software developer 5+ years</p>
      </section >
      <section className="text-center container" id="portfolio-destination">
        <AllReposButton></AllReposButton>
      </section>
      <section className='mb-4'>
        <ProjectTagList tagStateMachine={tagStateMachine} setTagStateMachine={setTagStateMachine}></ProjectTagList>
      </section>
      <div className="container-fluid mb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <PortfolioItems tagStateMachine={tagStateMachine}></PortfolioItems>
        </div>
      </div>
    </>
  );
};