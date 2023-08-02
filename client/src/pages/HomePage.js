import { Link } from 'react-router-dom';

export const HomePage = () => {
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
        </>
    );
};