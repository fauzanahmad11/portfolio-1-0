import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-0">
                <div className="container">
                    <Link to="/" className="text-decoration-none">
                        <a className="navbar-brand text-logo">FAFA</a>
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="text-decoration-none">
                            <a className="nav-link active"
                            >Home</a>
                        </Link>
                        <Link to="/about" className="text-decoration-none">
                            <a className="nav-link">About</a>
                        </Link>
                        <Link to="/portofolio" className="text-decoration-none">
                            <a className="nav-link"
                            >Portofolio</a>
                        </Link>
                        <a className="nav-link" href="https://www.twitter.com/@24_fauzan"
                        >Contact</a
                        >
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;