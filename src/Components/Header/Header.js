import React from 'react';
import shape from '../../images/Shapes/shape 01.jpg';
import myimg from '../../images/My images/my-bg.png';
import myimg1 from '../../images/My images/01.png';
import myimg2 from '../../images/My images/02.png';
import pdf from '../../images/My PDF/Tareq Ahmed Khan CV PDF.pdf';
import './Header.css';

const Header = () => {

    return (
        <div style={{ borderRadius: '8px' }} className="container">
            <div style={{ borderRadius: '8px' }} data-aos="fade-right" class="bgheader">
                <div className="row align-items-center p-4">
                    <div className="col-md-12 col-lg-8">
                        <h2 className="font">I'M <span data-aos="fade-left" className="name">TAREQ AHMED KHAN</span></h2>
                        <h3 className="font 2xl">FULL STACK <span data-aos="fade-left" className="name">WEB DEVELOPER</span></h3>
                        <p data-aos="fade-right" className="font">I'm a MERN based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>


                        <div className="">
                            <a href={pdf} data-aos="fade-up" className="btn btn-warning " download>
                                CV Download
                            </a>
                        </div>



                    </div>
                    <div class="col-md-12 col-lg-4">
                        <img data-aos="fade-right" className="shape" src={myimg} alt="" />

                    </div>
                </div>
            </div>

            <hr></hr>
        </div>
    );
};

export default Header;