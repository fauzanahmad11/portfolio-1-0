import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Main extends Component {
    render() {
        return (
            // <!-- HEADER -->
            <header className="header">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-lg-6 typography">
                        <div className="jumbotron">
                            <h1 className="display-4">
                                Halo ! <br />
                                Saya Fauzan
                            </h1>
                            <p className="lead">
                                Saya adalah seorang Designer dengan latar belakang pendidikan S1
                                Teknik informatika dengan keahlian Frontend Designer, UI UX
                                Designer dan Graphic Designer. Saya sangat senang memecahkan
                                sebuah masalah guna mendapatkan solusi pada sebuah desain yang
                                dapat memberi manfaat bagi orang lain.
                            </p>
                            <a
                                className="btn btn-blue me-2"
                                href="pages/portofolio/index.html"
                                role="button"
                                >My Portofolio
                            </a>
                            <a
                                className="btn btn-outline-blue"
                                href="https://www.instagram.com/_fauzanahmad_"
                                role="button"
                                >Follow Me</a
                            >
                            </div>
                            <div className="social-media">
                            <a
                                href="https://www.instagram.com/_fauzanahmad_"
                                target="_blank"
                                className="sm-item"
                                >
                                    <i><FontAwesomeIcon icon={['fab', 'instagram']} /></i>
                            </a>
                            <a
                                href="https://www.codepen.io/_fauzanahmad_"
                                target="_blank"
                                className="sm-item"
                                ><i><FontAwesomeIcon icon={['fab', 'codepen']} /></i>
                            </a>
                            <a
                                href="https://github.com/fauzanahmad11"
                                className="sm-item"
                                target="_blank"
                                >
                                    <i><FontAwesomeIcon icon={['fab', 'github']} /></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 text-center profile">
                        <div className="img">
                        <img src="img/profile-1.svg" className="img-fluid" alt="" />
                        </div>
                        <div className="copyright">
                        <small><span className="text-logo">FAFA</span> &copy; 2020</small>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Main;