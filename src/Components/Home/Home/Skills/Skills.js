import React, { useEffect, useState } from 'react';
import Language from '../../Language/Language';
import './Skills.css';


const languages = [
    {
        name: 'HTML-5',
        img: 'https://image.freepik.com/free-vector/programmer-working-with-html_52683-24171.jpg'
    },
    {
        name: 'MERN',
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg'
    },
    {
        name: 'Boostrap',
        img: 'https://www.wallpapertip.com/wmimgs/161-1610552_bootstrap-hd.jpg'
    },
    {
        name: 'Tailwind CSS',
        img: 'https://tailwindui.com/img/og-image.png'
    },
    {
        name: 'Metarial UI',
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--e8VPb0rs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/txmsevpbeqzmgw240w5i.png'
    },
    {
        name: 'Firebase',
        img: 'https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png'
    },
]

const Skills = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('/languages.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);
    console.log(languages)
    return (
        <div className="container ">
            <div style={{ borderRadius: '8px' }} className="homebg ">
                <div className=" pb-3 p-4 pb-2 ">
                    <div data-aos="fade-up" className="bg-light rounded "><h2 className="header">MY <span className="skills"> Skills </span></h2></div>
                    <hr data-aos="fade-right" className="skillsline"></hr>
                    <div className="row row-cols-1 row-cols-md-3 g-4 w-100%">

                        {
                            languages.map(language => <Language

                                key={language.name}
                                language={language}

                            ></Language>)
                        }
                    </div>
                </div>

            </div>
            <hr></hr>
        </div>
    );
};

export default Skills;