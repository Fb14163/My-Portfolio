import React from 'react';
import Header from '../../Header/Header';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from './Skills/Skills';
import './Home.css';
import Particles from 'react-particles-js';



const Home = () => {
    return (
        <div className="">


            <div>

                <Header></Header>
                <Projects></Projects>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;