import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";


const SecondFooter = () => {
    return (
        <>
        <div className='second-footer-div'>
            <div className='second-footer-logo d-flex justify-content-center'>
                <img
                    src={require("../assets/demoLogo.png")}
                    alt=""
                    style={{ height: 100, width: 100 }}
                />
            </div>

            
                <div className='d-flex justify-content-around'>
                    <div className='contact-us'>
                       <h4 className='contact-border'>Contact Us</h4>
                        Phone: 555-555-5555
                        <br />
                        email: someemail@gmail.com
                    </div>
                    <div className='location'>
                        <h4 className='contact-border'>Location</h4>
                        12345 Some road
                        <br />
                        Portland, OR 97013
                    </div>
                    <div className='site-links'>
                        <h4 className='contact-border'>Site Links</h4>
                        Home
                        <br />
                        About
                        <br />
                        Sales
                        <br />
                        Facility
                    </div>
                </div>
            </div>

        </>
    );
}

export default SecondFooter;