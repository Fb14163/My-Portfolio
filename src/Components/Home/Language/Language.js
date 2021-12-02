import React, { useEffect } from 'react';
import './Language.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Language = ({ language }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { img, name } = language;
    console.log(language)
    return (
        <div >
            <div className="col">
                <div data-aos="fade-up" className="card w-100 ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Language;