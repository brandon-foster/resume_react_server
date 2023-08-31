import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="shadow-container h-100 w-100">
      <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="w-max-42em d-flex w-100 text-center mx-auto mb-auto flex-column">
          <div>
            <h3 className="float-md-start mb-0">home</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link to='/' className='nav-link fw-bold py-1 px-0'>Portfolio</Link>
              <Link to='/resume' className='nav-link fw-bold py-1 px-0'>Resume</Link>
              <Link to='/opinions' className='nav-link fw-bold py-1 px-0'>Opinions</Link>
            </nav>
          </div>
        </header>
        <main className="px-3">
          <Outlet />
        </main>
        <footer className="mt-auto text-white-50">
          <p>Thanks to <a href="https://twitter.com/mdo" className="text-white">@mdo</a> for the nice <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a> template.</p>
        </footer>
      </div>
    </div>
  );
};