import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="container ">
            <div style={{ borderRadius: '8px' }} className=" bg  p-3">
                <div data-aos="fade-up" className="  rounded bg-light"><h2 className=" ">Contact <span className="contact-header">With</span>Me</h2></div>
                <hr data-aos="fade-right" className=" line" ></hr>
                <div className="section">

                    <div data-aos="zoom-in-up" className="contact-contain">
                        <form action="https://formspree.io/f/xbjwrprg" method="POST">
                            <div className="form-group">
                                <label className="label" for="firsName">First Name</label>
                                <input type="text" id="firstName" name="firstName"></input>
                            </div>
                            <div className="form-group">
                                <label className="label" for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName"></input>
                            </div>
                            <div className="form-group">
                                <label className="label" for="email">Email</label>
                                <input type="text" id="email" name="email"></input>
                            </div>
                            <div className="form-group">
                                <label className="label" for="message">Message</label>
                                <textarea className="textarea" type="text" id="message" name="message"></textarea>
                            </div>
                            <button className="button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;