import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="content">
                <header className="header">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12 typography">
                            <div className="jumbotron">
                                <h1 className="display-4">
                                Halo ! <br />
                                Saya Fauzan
                                </h1>
                                <p className="lead">
                                Saya adalah seorang Designer dengan latar belakang pendidikan S1 Teknik informatika dengan keahlian Frontend Designer, UI UX Designer dan Graphic Designer. Saya sangat senang memecahkan sebuah masalah guna mendapatkan solusi pada sebuah desain yang dapat memberi manfaat bagi orang lain.
                                </p>
                                <a
                                className="btn btn-blue me-2"
                                href="../portofolio/index.html"
                                role="button"
                                >My Portofolio</a>
                                <a
                                className="btn btn-outline-blue"
                                href="https://www.instagram.com/_fauzanahmad_"
                                role="button"
                                >Follow Me</a>
                            </div>
                            <div className="social-media">
                                <a
                                href="https://www.instagram.com/_fauzanahmad_"
                                target="_blank"
                                className="sm-item"
                                ><i className="fab fa-instagram"></i
                                ></a>
                                <a
                                href="https://www.codepen.io/_fauzanahmad_"
                                target="_blank"
                                className="sm-item"
                                ><i className="fab fa-codepen"></i
                                ></a>
                                <a href="#" className="sm-item" target="_blank"
                                ><i className="fab fa-github"></i
                                ></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default About;