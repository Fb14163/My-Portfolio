import React from 'react';
import './Projects.css';
import doctor from '../../../images/projects/01.png';
import honda from '../../../images/projects/02.png';
import shop from '../../../images/projects/03.png';

const Projects = () => {

    return (
        <div style={{ borderRadius: '8px', width: '100%', }} className="container mb-4 ">
            <div style={{ borderRadius: '8px' }} data-aos="fade-right" className=" homebg">
                <div className="" style={{}}>
                    <div className="container p-4 ">
                        <div data-aos="fade-up" className="bg-light rounded mt-3"><h3 className="header">Latest <span className="projec-header ">Projects</span></h3></div>
                        <hr data-aos="fade-right" className="line"></hr>
                        <div data-aos="zoom-out-up" className="card-group gap-4  ">
                            <div className="card rounded border border-secondary">
                                <img src={doctor} className="card-img-top" alt="..." />
                                <div claclassNamess="card-body">
                                    <h5 className="card-title">Life-Care</h5>
                                    <h5 className="card-title">languages: 'HTML5 CSS JavaScript </h5>
                                    <p className="card-text">- Login System
                                        -Appointment System
                                        -Private Route</p>
                                    <a href="https://mega-shop.netlify.app" style={{ textDecoration: 'none' }} className="card-text"><small className="text"> https://mega-shop.netlify.app</small></a>
                                </div>
                                <button style={{ backgroundColor: 'goldenrod', border: 'none', borderRadius: '8px', width: '50%', padding: '3px', marginTop: '34px', marginLeft: '3px' }}>Life-Care Details </button>
                            </div>
                            <div class="card rounded border border-secondary">
                                <img src={honda} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Honda-CBR</h5>
                                    <h5 className="card-title">languages: HTML5 CSS</h5>
                                    <p className="card-text">- Standard Design
                                        -Booking System
                                        -New Collection</p>
                                    <a href="https://honda-cbr-new-website.netlify.app" style={{ textDecoration: 'none' }} className="card-text"><small className="text"> https://honda-cbr-new-website.netlify.app</small></a>
                                </div>
                                <button style={{ backgroundColor: 'goldenrod', border: 'none', borderRadius: '8px', width: '50%', padding: '3px', margin: '3px' }}>Honda-CBR Details </button>
                            </div>
                            <div className="card rounded border border-secondary">
                                <img src={shop} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mega-Shop</h5>
                                    <h5 className="card-title">languages: HTML5 CSS JavaScript </h5>
                                    <p className="card-text"> - Standard Design
                                        -Booking System
                                        -New Collection</p>
                                    <a href="https://mega-shop.netlify.app" style={{ textDecoration: 'none' }} className="card-text"><small className="text"> https://mega-shop.netlify.app</small></a>
                                </div>
                                <button style={{ backgroundColor: 'goldenrod', border: 'none', borderRadius: '8px', width: '50%', padding: '3px', margin: '3px' }}>Mega-Shop Details </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Projects;