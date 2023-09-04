import { Outlet, Link } from "react-router-dom";

import { IconTerminal } from '../icon-html/IconTerminal';
import { layoutStrings } from '../data/strings';

export const Layout = () => {
  return (
    <div className="shadow-container h-100 w-100">
      <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="w-max-42em d-flex w-100 text-center mx-auto mb-auto flex-column">
          <div>
              <a href='/' className='text-decoration-none text-white'>
            <h3 className='float-md-start mb-0'>
                <IconTerminal />&nbsp;portfolio
            </h3>
              </a>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link to='/' className='nav-link fw-bold py-1 px-0'>Projects</Link>
              <Link to='/resume' className='nav-link fw-bold py-1 px-0'>Resume</Link>
              <Link to='/philosophy' className='nav-link fw-bold py-1 px-0'>Philosophy</Link>
            </nav>
          </div>
        </header>
        <main className="px-3">
          <Outlet />
        </main>
        <footer className="pb-3 text-white-50">
          <p dangerouslySetInnerHTML={{ __html: layoutStrings.footer }}></p>
        </footer>
      </div>
    </div>
  );
};