import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div class="container-fluid">
                <a style={{ color: 'goldenrod' }} class="navbar-brand" href="/">My Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <NavLink className="nav" style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontWeight: 'bold', border: '1px solid goldenrod', borderRadius: '8px', padding: '3px' }} to="/home">Home</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontWeight: 'bold', border: '1px solid goldenrod', borderRadius: '8px', padding: '3px' }} to="/skills">Skills</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontWeight: 'bold', border: '1px solid goldenrod', borderRadius: '8px', padding: '3px' }} to="/projects">Projects</NavLink>

                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontWeight: 'bold', border: '1px solid goldenrod', borderRadius: '8px', padding: '3px' }} to="/about">About Me</NavLink>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;