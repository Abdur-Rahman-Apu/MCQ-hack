import React from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-sm ">
                <div className="container ">
                    <Link className="navbar-brand" to="/">
                        <img src={'/brain.png'} alt="icon" width="50" height="50" />
                    </Link>
                    <Link className="navbar-brand fw-bold" to='\'> <span className='title'>MCQ</span> Hack</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/topics">Topics</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/statistics">Statistics</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Headers;