import React from 'react';

const About = () => {
    return (
        <div style={{ backgroundColor: '#000000', height: '100vh' }} >

            <div style={{ backgroundColor: '#000000' }} className="bg">
                <div className="container pt-4">
                    <h2 className="font" style={{ color: 'white' }}>I'M <span data-aos="fade-left" className="name" style={{ color: 'goldenrod' }}>TAREQ AHMED KHAN</span></h2>
                    <h3 className="font 2xl" style={{ color: 'white' }}>FULL STACK <span style={{ color: 'goldenrod' }} data-aos="fade-left" className="name">WEB DEVELOPER</span></h3>
                    <p data-aos="fade-right" className="font" style={{ color: 'black' }}>I'm a MERN based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                    <div>
                        <h3 style={{ color: 'goldenrod' }}>Qualification</h3>
                        <hr data-aos="fade-right" className="line"></hr>
                        <table data-aos="fade-left" class="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Group</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>SSC</td>
                                    <td>Science</td>
                                    <td>3.63 Out Of 5.00</td>
                                    <td>2008-2009</td>
                                </tr>
                                <tr>

                                    <td> Diploma Engineering </td>
                                    <td>Computer</td>
                                    <td>--</td>
                                    <td>Last year Running</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 style={{ color: 'goldenrod' }}>Course</h3>
                        <hr data-aos="fade-right" className="line"></hr>
                        <table data-aos="fade-right" class="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Institute</th>
                                    <th scope="col">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Full Stack Web Developer</td>
                                    <td>5 Months</td>
                                    <td>Programming Hero</td>
                                    <td>2021 (Bacth-4)</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;