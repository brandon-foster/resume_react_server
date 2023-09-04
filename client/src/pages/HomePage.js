import { ProjectTagList } from '../comp/ProjectTagList';
import { AllReposButton } from '../comp/AllReposButton';
import { PortfolioItems } from '../comp/PortfolioItems';

export const HomePage = ({ tagStateMachine, setTagStateMachine }) => {
  return (
    <>
      <section className='my-3'>
        <h1 className='display-2'>Brandon Foster</h1>
        <p className='lead'>software developer 5+ years</p>
      </section >
      <section className='text-center container' id='portfolio-destination'>
        <AllReposButton></AllReposButton>
        <ProjectTagList tagStateMachine={tagStateMachine} setTagStateMachine={setTagStateMachine}></ProjectTagList>
      </section>
      <div className='container-fluid my-4'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <PortfolioItems tagStateMachine={tagStateMachine}></PortfolioItems>
        </div>
      </div>
    </>
  );
};